import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Listfilm from './listfilm';
const EditFilm = () => {
    const { id } = useParams(); // Lấy id từ URL
    const navigate = useNavigate();
    const [usePhimData, setPhimData] = useState({
        ten_phim: '',
        slug: '',
        thumb: '',
        loai_phim: '',
        nam_id: '',
        quoc_gia_id: '',
        dien_vien: '',
        noi_dung: '',
        luot_xem: '',
        theloai:[],
        chi_tiet_phim:[]
    });

    const [useNam,setNam] = useState([]);
    const [useQuocGia,setQuocGia] = useState([]);
    const [useTheLoai,setTheLoai] = useState([]);
    useEffect(() => {
        fetchNam();
        fetchQuocGia();
        fetchTheLoai();
        fetchPhimData();
    }, [id]);

    const fetchNam = async () => {
        try {
          const result = await axios("http://127.0.0.1:8000/api/nams");
          setNam(result.data.result);
            console.log(result.data.result)
        }
        catch(error) {
          console.log(error);
        }
      }
      
    
      const fetchQuocGia = async () => {
        try {
          const result = await axios("http://127.0.0.1:8000/api/quocgias");
          setQuocGia(result.data.result);
          console.log(result.data.result)
        }
        catch(error) {
          console.log(error);
        }
      }
    
      const fetchTheLoai = async () => {
        try {
          const result = await axios("http://127.0.0.1:8000/api/theloais");
          setTheLoai(result.data.result);
          console.log(result.data.result)
        }
        catch(error) {
          console.log(error);
        }
      }

    const fetchPhimData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/phims/${id}`);
            console.log('API Response:', response); // In ra toàn bộ response
            setPhimData(response.data.phims); // Lưu dữ liệu vào state
        } catch (error) {
            console.log("Lỗi khi lấy dữ liệu phim", error.response || error.message); // In lỗi chi tiết
        }
    };

    const xulyChiTietPhim = (e, index) => {
        const updatedChiTietPhim = [...usePhimData.chi_tiet_phim];
        updatedChiTietPhim[index][e.target.name] = e.target.value;
        setPhimData({
            ...usePhimData,
            chi_tiet_phim: updatedChiTietPhim,
        });
    };

    const xulyXoaChiTietPhim = (index) => {
        const updatedChiTietPhim = [...usePhimData.chi_tiet_phim];
        updatedChiTietPhim.splice(index, 1); // Xoá phần tử tại index
        setPhimData({
            ...usePhimData,
            chi_tiet_phim: updatedChiTietPhim,
        });
    };
    const xulyThemChiTietPhim = () => {
        const newChiTietPhim = {
            so_tap: '',
            ten_tap: '',
            link_tap: '',
        };
        setPhimData({
            ...usePhimData,
            chi_tiet_phim: [...usePhimData.chi_tiet_phim, newChiTietPhim],
        });
    };

    const xylyChange = (e) => {
        setPhimData({
            ...usePhimData,
            [e.target.name]: e.target.value,
        });
    };

    const xulyChangeTheLoai = (e, index) => {
        const updatedTheLoai = [...usePhimData.theloai];
        updatedTheLoai[index].ten_the_loai = e.target.value; // Cập nhật tên thể loại
        setPhimData({
            ...usePhimData,
            theloai: updatedTheLoai, // Cập nhật lại state
        });
    };

    const [useLoading,setLoading] = useState()
    const xulySubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/updatePhim/${id}`, usePhimData); // Gửi yêu cầu PUT để sửa phim
            alert("Cập nhật thành công")
            setLoading(true);
        } catch (error) {
            console.log("Lỗi khi chỉnh sửa phim", error);
            alert("Cập nhật thất bại")

        }
    };
    if(useLoading) {
        return <Listfilm/>
    }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Chỉnh sửa phim</h1>
            <form className="space-y-4">
                {/* Các trường thông tin phim */}
                <div>
                    <label htmlFor="ten_phim" className="block">Tên phim:</label>
                    <input
                        type="text"
                        id="ten_phim"
                        name="ten_phim"
                        value={usePhimData.ten_phim}
                        onChange={xylyChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="slug" className="block">Slug:</label>
                    <input
                        type="text"
                        id="slug"
                        name="slug"
                        value={usePhimData.slug}
                        onChange={xylyChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        disabled 
                    />
                </div>

                <div>
                    <label htmlFor="thumb" className="block">Thumb:</label>
                    <input
                        type="text"
                        id="thumb"
                        name="thumb"
                        value={usePhimData.thumb}
                        onChange={xylyChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label htmlFor="loai_phim" className="block">Loại phim:</label>
                    {/* <input
                        type="text"
                        id="loai_phim"
                        name="loai_phim"
                        value={usePhimData.loai_phim == 1 ? "Phim bộ": "Phim lẻ"}
                        onChange={xylyChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    /> */}
                    <select onChange={xylyChange} className="w-full p-2 border rounded" name="loai_phim" id="">
                        <option value="0">Phim lẻ</option>

                        <option value="1">Phim bộ</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="nam_id" className="block">Năm:</label>
                    {/* <input
                        type="text"
                        id="nam_id"
                        name="nam_id"
                        value={usePhimData.nam ? usePhimData.nam.nam_phat_hanh : ""}
                        onChange={xylyChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    /> */}
                    <select onChange={xylyChange}  value={usePhimData.nam_id} className="w-full p-2 border border-gray-300 rounded" name="nam_id" id="">
                    {useYear.map((detail,index)=>(
                        <option    value={detail.id}>{detail.nam_phat_hanh}</option>

                    ))}
                    </select>
                </div>



                <div>
                    <label htmlFor="quoc_gia_id" className="block">Quốc gia:</label>
                    
                        {/* <input
                        type="text"
                        id="quoc_gia_id"
                        name="quoc_gia_id"
                        value={usePhimData.quocgia ? usePhimData.quocgia.ten_quoc_gia :""}
                        onChange={xylyChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        /> */}
                    <select onChange={xylyChange} value={usePhimData.quoc_gia_id}  className="w-full p-2 border rounded" name="quoc_gia_id" id="" >
                        
                        {useQuocGia.map((detail,index)=>(

                        <option   value={detail.id}>{detail.ten_quoc_gia}</option>
                        ))}
                    </select>

                </div>

                <div>
                    <label htmlFor="dien_vien" className="block">Diễn viên:</label>
                    <input
                        type="text"
                        id="dien_vien"
                        name="dien_vien"
                        value={usePhimData.dien_vien}
                        onChange={xylyChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="noi_dung" className="block">Nội dung:</label>
                    <input
                        type="text"
                        id="noi_dung"
                        name="noi_dung"
                        value={usePhimData.noi_dung}
                        onChange={xylyChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="luot_xem" className="block">Lượt xem:</label>
                    <input
                        type="number"
                        id="luot_xem"
                        name="luot_xem"
                        value={usePhimData.luot_xem}
                        onChange={xylyChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="the_loai_id" className="block">Thể loại:</label>
                    <table>

                        <tbody>
                            {usePhimData.theloai.map((detail,index)=> (
                                <tr>
                                    <td className='px-4 py-2 border'>
                                        <input 
                                            type="text" 
                                            name='ten_the_loai'
                                            value={detail.ten_the_loai}
                                            onChange={(e) => xulyChangeTheLoai(e, index)}
                                        />
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>



                {/* Thêm phần chi tiết phim */}
                {usePhimData.loai_phim == 0 && (
                    <>
                                        <div className="mt-8">
                    <h2 className="text-lg font-semibold mb-4">Chi tiết phim</h2>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse table-auto">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 border">Số tập</th>
                                    <th className="px-4 py-2 border">Tên tập</th>
                                    <th className="px-4 py-2 border">Link tập</th>
                                    <th className="px-4 py-2 border">Thời lượng</th>


                                </tr>
                            </thead>
                            <tbody>
                                {usePhimData.chi_tiet_phim && usePhimData.chi_tiet_phim.map((detail, index) => (
                                    <tr key={detail.id} className="bg-white">
                                        <td className="px-4 py-2 border">
                                            <input
                                                type="text"
                                                name="so_tap"
                                                value={detail.so_tap}
                                                onChange={(e) => xulyChiTietPhim(e, index)}
                                                className="w-full p-1 border border-gray-300 rounded"
                                            />
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <input
                                                type="text"
                                                name="ten_tap"
                                                value={detail.ten_tap}
                                                onChange={(e) => xulyChiTietPhim(e, index)}
                                                className="w-full p-1 border border-gray-300 rounded"
                                            />
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <input
                                                type="text"
                                                name="link_tap"
                                                value={detail.link_tap}
                                                onChange={(e) => xulyChiTietPhim(e, index)}
                                                className="w-full p-1 border border-gray-300 rounded"
                                            />
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <input
                                                type="text"
                                                name="thoi_luong"
                                                value={detail.thoi_luong}
                                                onChange={(e) => xulyChiTietPhim(e, index)}
                                                className="w-full p-1 border border-gray-300 rounded"
                                            />
                                        </td>
  
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                
{/* 
                <button
                        type="button"
                        onClick={xulyThemChiTietPhim}
                        className="mt-4 bg-green-500 text-white py-2 px-4 mr-4 rounded"
                    >
                        Thêm chi tiết phim
                    </button> */}
                    </>
                )}                
                {film.loai_phim == 1 && (
                    <>
                                        <div className="mt-8">
                    <h2 className="text-lg font-semibold mb-4">Chi tiết phim</h2>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse table-auto">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 border">Số tập</th>
                                    <th className="px-4 py-2 border">Tên tập</th>
                                    <th className="px-4 py-2 border">Link tập</th>
                                    <th className="px-4 py-2 border">Thời lượng</th>
                                    <th className="px-4 py-2 border">Thao tác</th>


                                </tr>
                            </thead>
                            <tbody>
                                {film.chi_tiet_phim && film.chi_tiet_phim.map((detail, index) => (
                                    <tr key={detail.id} className="bg-white">
                                        <td className="px-4 py-2 border">
                                            <input
                                                type="text"
                                                name="so_tap"
                                                value={detail.so_tap}
                                                onChange={(e) => xulyChiTietPhim(e, index)}
                                                className="w-full p-1 border border-gray-300 rounded"
                                            />
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <input
                                                type="text"
                                                name="ten_tap"
                                                value={detail.ten_tap}
                                                onChange={(e) => xulyChiTietPhim(e, index)}
                                                className="w-full p-1 border border-gray-300 rounded"
                                            />
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <input
                                                type="text"
                                                name="link_tap"
                                                value={detail.link_tap}
                                                onChange={(e) => xulyChiTietPhim(e, index)}
                                                className="w-full p-1 border border-gray-300 rounded"
                                            />
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <input
                                                type="text"
                                                name="thoi_luong"
                                                value={detail.thoi_luong}
                                                onChange={(e) => xulyChiTietPhim(e, index)}
                                                className="w-full p-1 border border-gray-300 rounded"
                                            />
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <button
                                                type="button"
                                                onClick={() => xulyXoaChiTietPhim(index)}
                                                className="bg-red-500 text-white px-2 py-1 rounded"
                                            >
                                                Xoá
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                

                <button
                        type="button"
                        onClick={xulyThemChiTietPhim}
                        className="mt-4 bg-green-500 text-white py-2 px-4 mr-4 rounded"
                    >
                        Thêm chi tiết phim
                    </button>
                    </>
                )}     

                <button onClick={e => xulySubmit(e)} type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
                    Lưu thay đổi
                </button>
            </form>
        </div>
    );

}



export default EditFilm 