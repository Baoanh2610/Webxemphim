import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Hls from "hls.js";
import { useParams } from 'react-router-dom';
import Menu from "./Menu";
import { Link } from 'react-router-dom';

function Watch() {
    const { id } = useParams();
    const videoRef = useRef(null);
    const [videoUrl, setVideoUrl] = useState("");
    const [movieInfo, setMovieInfo] = useState({
        ten_phim: "",
        dien_vien: "",
        nam_phat_hanh: "",
        noi_dung: "",
        quocgia: "",
        luotxem: "",
        episodes: [],
    });

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/phims/${id}`);
                console.log('API response:', response.data);
                if (response.data && response.data.phims && response.data.phims.chi_tiet_phim) {
                    const movieData = response.data.phims;

                    // Kiểm tra loại phim (phim bộ hay phim lẻ)
                    if (movieData.loai_phim === 1) {
                        const episodes = movieData.chi_tiet_phim.map(tap => ({
                            ten_tap: tap.ten_tap,
                            link_tap: tap.link_tap.split('?url=')[1], // lấy video URL cho tập
                        }));
                        setMovieInfo({
                            ten_phim: movieData.ten_phim,
                            dien_vien: Array.isArray(movieData.dien_vien)
                                ? movieData.dien_vien.map(dv => dv.ten_dien_vien).join(", ")
                                : movieData.dien_vien,
                            nam_phat_hanh: movieData.nam.nam_phat_hanh,
                            noi_dung: movieData.noi_dung,
                            quocgia: movieData.quocgia.ten_quoc_gia,
                            luotxem: movieData.luot_xem,
                            episodes: episodes,
                        });

                        // Mở tập 1 khi vào trang
                        setVideoUrl(episodes[0].link_tap);
                    } else {
                        // Phim lẻ
                        const videoUrl = movieData.chi_tiet_phim[0].link_tap.split('?url=')[1];
                        setVideoUrl(videoUrl);
                        setMovieInfo({
                            ten_phim: movieData.ten_phim,
                            dien_vien: Array.isArray(movieData.dien_vien)
                                ? movieData.dien_vien.map(dv => dv.ten_dien_vien).join(", ")
                                : movieData.dien_vien,
                            nam_phat_hanh: movieData.nam.nam_phat_hanh,
                            noi_dung: movieData.noi_dung,
                            quocgia: movieData.quocgia.ten_quoc_gia,
                            luotxem: movieData.luot_xem,
                        });
                    }
                } else {
                    console.error('Video URL not found in API response');
                }
            } catch (error) {
                console.error("Error fetching video URL:", error);
            }
        };
        fetchMovieData();
    }, [id]);

    useEffect(() => {
        if (videoUrl && Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoUrl); // Load trực tiếp M3U8 link
            hls.attachMedia(videoRef.current);
        }
    }, [videoUrl]);

    // Chức năng khi người dùng chọn một tập
    const handleEpisodeClick = (link_tap) => {
        setVideoUrl(link_tap); // Cập nhật video URL cho tập đã chọn
    };

    return (
        <div className='bg-gray-900 min-h-screen w-full flex flex-col text-white'>
            <Menu className="w-full" />

            <div className="content w-3/4 mx-auto mt-14 px-4 flex flex-col items-center">
                {/* Video and Related Movies side by side */}
                <div className="w-full flex justify-between">
                    <div className="video-player bg-black flex-1 h-[500px] flex items-center justify-center relative">
                        <video className="w-full h-full" controls ref={videoRef} />
                    </div>

                    {/* Related Movies */}
                    <div className="related-movies w-1/4 ml-4 overflow-y-auto">
                        <div className="flex flex-col gap-4">
                            <div className="block bg-gray-800 p-2 rounded hover:bg-gray-700 cursor-pointer">
                                <Link to="/watch/1">
                                    <img
                                        src="../image/hd19.jpg"
                                        alt="Movie Title"
                                        className="w-full h-32 object-cover rounded mb-2"
                                    />
                                </Link>

                                <h3 className="text-sm font-semibold truncate">Dragon ball</h3>
                            </div>
                            <div className="block bg-gray-800 p-2 rounded hover:bg-gray-700 cursor-pointer">
                                <Link to="/watch/10">
                                    <img
                                        src="../image/squid1.jpg"
                                        alt="Movie Title"
                                        className="w-full h-32 object-cover rounded mb-2"
                                    />
                                </Link>
                                <h3 className="text-sm font-semibold truncate">Squid game 1</h3>
                            </div>
                            <div className="block bg-gray-800 p-2 rounded hover:bg-gray-700 cursor-pointer">
                                <Link to="/watch/11">
                                    <img
                                        src="../image/squid2.jpg"
                                        alt="Movie Title"
                                        className="w-full h-32 object-cover rounded mb-2"
                                    />
                                </Link>
                                <h3 className="text-sm font-semibold truncate">Squid game 2</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nút Like và Thông tin phim */}
                <div className="relative w-full">
                    {/* Like Button */}
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 flex items-center gap-2 mb-4"
                    >
                        <FontAwesomeIcon icon={faHeart} /> Like
                    </button>

                    {/* Movie Info */}
                    <div className="movie-info text-left w-full mt-10">
                        {movieInfo.episodes && movieInfo.episodes.length > 0 && (
                            <div className="episodes mt-4">
                                <h4 className="text-lg font-semibold text-gray-50">Các Tập Phim:</h4>
                                <div className="flex gap-4 mt-2">
                                    {movieInfo.episodes.map((episode, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleEpisodeClick(episode.link_tap)}
                                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                        >
                                            Tập {index + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        <h3 className="text-xl font-semibold my-4 text-gray-50">{movieInfo.ten_phim}</h3>
                        <p className="text-xl text-gray-50 my-4">Diễn Viên: {movieInfo.dien_vien}</p>
                        <p className="text-xl text-gray-50 my-4">Năm: {movieInfo.nam_phat_hanh}</p>
                        <p className="text-xl text-gray-50 my-4">Quốc gia: {movieInfo.quocgia}</p>
                        <p className="text-xl text-gray-50 my-4">Mô tả: {movieInfo.noi_dung}</p>
                        <p className="text-xl text-gray-50 my-4">Lượt xem: {movieInfo.luotxem}</p>

                        {/* Display Episodes as Buttons */}

                    </div>
                </div>

                {/* Comment Section */}
                <div className="comments mt-8 w-full">
                    <h2 className="text-xl font-bold mb-4">Comments</h2>
                    <div className="bg-gray-800 p-4 rounded">
                        <p className="text-gray-400">Comment section coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Watch;
