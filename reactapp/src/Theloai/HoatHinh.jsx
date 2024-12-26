import { useState } from 'react'
import { Link } from "react-router-dom";
// import Menu from './routes/Menu';
// import './Theloai.css'
import Menu from '../routes/Menu';
function HoatHinh() {
    return (
        <div className='min-h-screen w-full bg-gray-500'>
            <div className='content'>
                {/* <div id="menu" className="bg-gray-800 pb-2 pt-2 sticky top-0 z-50 ">
                    <nav className="flex justify-between text-white mt-5 main-nav">
                        <Link to="/" className="ml-7"><img src="../image/Black Grey Minimalist Modern Cinema Logo.png" alt="" className="h-10 w-10 rounded-full mb-4" /></Link>
                        <div className="relative group">
                            <a className="hover:text-red-600" href="">THỂ LOẠI</a>
                            <ul className="absolute left-0 hidden bg-gray-700 mt-2 rounded-md group-hover:block w-64 ">
                                <div className="grid grid-cols-2 gap-2 p-2">
                                    <li><Link to="/theloai/hanhdong" className='block px-4 py-2 hover:bg-gray-600 hover:text-red-600'>Hành Động</Link></li>
                                    <li><Link to="/theloai/haihuoc" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Hài Hước</Link></li>
                                    <li><Link to="/theloai/kinhdi" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Kinh Dị</Link></li>
                                    <li><Link to="/theloai/tinhcam" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Tình Cảm</Link></li>
                                    <li><Link to="/theloai/phieuluu" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Phiêu Lưu</Link></li>
                                    <li><Link to="/theloai/hoathinh" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Hoạt Hình</Link></li>
                                    <li><Link to="/theloai/khoahoc" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Khoa Học</Link></li>
                                    <li><Link to="/theloai/lichsu" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Lịch Sử</Link></li>
                                    <li><Link to="/theloai/kiemhiep" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Kiếm Hiệp</Link></li>
                                    <li><Link to="/theloai/giadinh" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Gia Đình</Link></li>
                                    <li><Link to="/theloai/thethao" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Thể Thao</Link></li>
                                    <li><Link to="/theloai/vientuong" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Viễn Tưởng</Link></li>
                                </div>
                            </ul>
                        </div>
                        <div className="relative group">
                            <a className="hover:text-red-600" href="">QUỐC GIA</a>
                            <ul className="absolute left-0 hidden bg-gray-700 mt-2 rounded-md group-hover:block w-64">
                                <div className="grid grid-cols-2 gap-2 p-2">
                                    <li><Link to="/quocgia/my" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Mỹ</Link></li>
                                    <li><Link to="/quocgia/vietnam" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Việt Nam</Link></li>
                                    <li><Link to="/quocgia/trungquoc" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Trung Quốc</Link></li>
                                    <li><Link to="/quocgia/hanquoc" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Hàn Quốc</Link></li>
                                </div>
                            </ul>
                        </div>
                        <div className="relative group">
                            <a className="hover:text-red-600" href="">PHIM LẺ</a>
                            <ul className="absolute left-0 hidden bg-gray-700 mt-2 rounded-md group-hover:block w-64">
                                <div className="grid grid-cols-2 gap-2 p-2">
                                    <li><Link to="/phimle/moinhat" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Mới Nhất</Link></li>
                                    <li><Link to="/phimle/2023" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Năm 2023</Link></li>
                                    <li><Link to="/phimle/2022" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Năm 2022</Link></li>
                                    <li><Link to="/phimle/2021" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Năm 2021</Link></li>
                                    <li><Link to="/phimle/2020" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Năm 2020</Link></li>
                                    <li><Link to="/phimle/2019" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Năm 2019</Link></li>
                                    <li><Link to="/phimle/2018" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Năm 2018</Link></li>
                                    <li><Link to="/phimle/2017" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Năm 2017</Link></li>


                                </div>
                            </ul>
                        </div>
                        <div className="relative group">
                            <a className="hover:text-red-600" href="">PHIM BỘ</a>
                            <ul className="absolute left-0 hidden bg-gray-700 mt-2 rounded-md group-hover:block w-64">
                                <div className="grid grid-cols-2 gap-2 p-2">
                                    <li><Link to="/phimbo/my" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Mỹ</Link></li>
                                    <li><Link to="/phimbo/vietnam" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Việt Nam</Link></li>
                                    <li><Link to="/phimbo/trungquoc" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Trung Quốc</Link></li>
                                    <li><Link to="/phimbo/hanquoc" className="block px-4 py-2 hover:bg-gray-600 hover:text-red-600">Hàn Quốc</Link></li>
                                </div>
                            </ul>
                        </div>
                        <a className="hover:text-red-600" href="">CHIẾU RẠP</a>
                        <a className="hover:text-red-600" href="">SẮP CHIẾU</a>
                        <div className="flex items-center border-gray-300 rounded-lg overflow-hidden mb-6">
                            <input type="text" className="px-4 w-max text-black focus:outline-none caret-black rounded-full" placeholder="Tìm kiếm..." />
                            <button className="flex items-center justify-center px-4 text-white focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.242 4.243a1 1 0 01-1.414 1.414l-4.242-4.243zM8 14A6 6 0 108 2a6 6 0 000 12z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <a className="mr-10 text-2xl" href=""><i className="fa-solid fa-user"></i></a>
                    </nav>
                </div> */}
                <Menu />
                <div className="text-white text-2xl block ml-[15%] mt-[4%] ">PHIM HOẠT HÌNH</div>
                <div id='noidung' className='bg-gray-500 min-h-screen w-full flex-center'>
                    <div id="kinhdi" className="mt-5 mx-auto w-3/4">
                        <table className="table-auto w-full h-full border-separate border-spacing-x-2 border-spacing-y-4 ">
                            <tr>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/hh1.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/hh2.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/hh3.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/hh4.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/hh5.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className=" h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/hh6.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/hh7.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/hh8.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/hh9.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/hh10.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className=" h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/top1.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/top2.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/tt5.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/top4.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/top5.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className=" h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/phimcr_1.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/phimcr_2.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/phimcr_3.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/phimcr_4.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/phimcr_5.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className=" h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/phimcn_1.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/phimcn_2.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/phimcn_3.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/phimcn_4.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                                <td className="  h-64 overflow-hidden cursor-pointer">
                                    <div className="w-full h-full">
                                        <img src="../image/phimcn_5.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HoatHinh;
