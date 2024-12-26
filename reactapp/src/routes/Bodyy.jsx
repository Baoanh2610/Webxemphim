//import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
function Bodyy() {

    return (
        <>
            <div id="phimdecu" className="mt-10 mx-auto w-3/4">
                <div className="flex justify-between items-center">
                    <a className="hover:text-red-600 font-bold ml-24" href="" >PHIM ĐỀ CỬ</a>
                    <a className="hover:text-red-600 font-bold mr-24" href="" >Xem tất cả</a>
                </div>
                <table className="table-auto w-full border-separate border-gray-300 border-spacing-2 mt-5">
                    <thead>
                        <tr>
                            <td className=" px-0 py-0" rowSpan="2" colSpan="2">
                                <div className="overflow-hidden h-full">
                                    <Link to="/watch/2">
                                        <img src="../image/phimdc_1.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                    </Link>
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <Link to="/watch/1">
                                        <img src="../image/phimdc_2.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                    </Link>
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <Link to="/watch/7">
                                        <img src="../image/phimdc_3.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <Link to="/watch/8">
                                        <img src="../image/phimdc_4.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                    </Link>
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <Link to="/watch/9">
                                        <img src="../image/phimdc_5.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <Link to="/watch/3">
                                        <img src="../image/phimdc_6.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                    </Link>
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <Link to="/watch/3">
                                        <img src="../image/phimdc_7.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                    </Link>
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <img src="../image/phimdc_8.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <img src="../image/phimdc_9.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="phimmoicapnhat" className="mt-5 mx-auto w-3/4">
                <div className="flex justify-between items-center">
                    <a className="hover:text-red-600 font-bold ml-24" href="" >PHIM MỚI CẬP NHẬT</a>
                    <a className="hover:text-red-600 font-bold ml-24" href="" >Xem tất cả</a>
                </div>
                <table className="table-auto w-full border-separate border-gray-300 border-spacing-2">
                    <thead>
                        <tr>
                            <td className=" px-0 py-0" rowSpan="2" colSpan="2">

                                <div className="overflow-hidden h-full">
                                    <Link to="/watch/5">
                                        <img src="../image/phimcn_1.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                    </Link>
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <img src="../image/phimcn_2.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <img src="../image/phimcn_3.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <img src="../image/phimcn_4.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <img src="../image/phimcn_5.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <img src="../image/phimcn_6.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <img src="../image/phimcn_7.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <img src="../image/phimcn_8.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <img src="../image/phimcn_9.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <img src="../image/phimcn_10.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <img src="../image/phimcn_11.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className=" px-0 py-0">
                                <div className="overflow-hidden h-full">
                                    <img src="../image/phimcn_12.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="phimhoathinh" className="mt-5 mx-auto w-3/4">
                <div className="flex justify-between items-center">
                    <a className="hover:text-red-600 font-bold ml-24" href="" >PHIM HOẠT HÌNH</a>
                    <a className="hover:text-red-600 font-bold mr-24" href="" >Xem tất cả</a>
                </div>
                <table className="table-auto w-full border-separate border-gray-300 border-spacing-2">
                    <thead>
                        <tr>
                            <td rowSpan="2" colSpan="2" className="align-top">
                                <div className="overflow-hidden h-[16.5rem]">
                                    <Link to="/watch/6">
                                        <img src="../image/phimhh_1.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                    </Link>
                                </div>
                            </td>
                            <td className="align-top">
                                <div className="overflow-hidden h-32">
                                    <img src="../image/phimhh_2.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className="align-top">
                                <div className="overflow-hidden h-32">
                                    <img src="../image/phimhh_3.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className="align-top">
                                <div className="overflow-hidden h-32">
                                    <img src="../image/phimhh_4.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-top">
                                <div className="overflow-hidden h-32">
                                    <img src="../image/phimhh_5.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className="align-top">
                                <div className="overflow-hidden h-32">
                                    <img src="../image/phimhh_6.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className="align-top">
                                <div className="overflow-hidden h-32">
                                    <img src="../image/phimhh_7.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div id="phimchieurapbanner" className="mt-5 mx-auto w-3/4 py-0 px-2 ">
                <div className="py-4  bg-gradient-to-r from-black to-red-400 mt-10">
                    <a className="justify-center flex cursor-pointer hover:text-red-500 font-bold text-white text-lg">PHIM CHIẾU RẠP</a>
                </div>
            </div>
            <div id="phimchieurap" className="mt-5 mx-auto w-3/4">
                <table className="table-auto w-full h-full border-separate border-spacing-x-2 border-spacing-y-4 ">
                    <tr>
                        <td className="  h-64 overflow-hidden cursor-pointer">
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
                                <img src="../image/phimcr_6.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                            </div>
                        </td>
                        <td className="  h-64 overflow-hidden cursor-pointer">
                            <div className="w-full h-full">
                                <img src="../image/phimcr_7.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                            </div>
                        </td>
                        <td className="  h-64 overflow-hidden cursor-pointer">
                            <div className="w-full h-full">
                                <img src="../image/phimcr_8.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                            </div>
                        </td>
                        <td className="  h-64 overflow-hidden cursor-pointer">
                            <div className="w-full h-full">
                                <img src="../image/phimcr_9.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                            </div>
                        </td>
                        <td className="  h-64 overflow-hidden cursor-pointer">
                            <div className="w-full h-full">
                                <img src="../image/phimcr_10.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="phimbomoi" className="mt-5 mx-auto w-3/4">
                <div className="flex justify-between items-center">
                    <a className="hover:text-red-600 font-bold ml-24" href="" >PHIM BỘ MỚI</a>
                    <a className="hover:text-red-600 font-bold mr-24" href="" >Xem tất cả</a>
                </div>
            </div>
            <div id="phimbo" className="mt-5 mx-auto w-3/4">
                <table className="table-auto w-full border-separate border-spacing-x-2 border-spacing-y-4">
                    <thead>
                        <tr>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/phimbo_1.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/phimbo_2.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/phimbo_3.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/phimbo_4.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/phimbo_5.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                        </tr>
                    </thead>

                </table>
            </div>
            <div id="phimlemoi" className="mt-5 mx-auto w-3/4">
                <div className="flex justify-between items-center">
                    <a className="hover:text-red-600 font-bold ml-24" href="" >PHIM LẺ MỚI</a>
                    <a className="hover:text-red-600 font-bold mr-24" href="" >Xem tất cả</a>
                </div>
                <table className="table-auto w-full border-separate border-spacing-x-2 border-spacing-y-4">
                    <thead>
                        <tr>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/phimle_1.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/phimle_2.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/phimle_3.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/phimle_4.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/phimle_5.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                        </tr>
                    </thead>

                </table>
            </div>
            <div id="bangxephang" className="mt-5 mx-auto w-3/4">
                <div className="justify-center flex">
                    <a className="text-center text-xl font-bold mb-4 hover:text-red-600 cursor-pointer ">Bảng Xếp Hạng</a>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <div className="flex items-center  p-4">
                        <a href="#" className="flex items-center w-full">
                            <span className="text-9xl font-bold text-gray-800 ">1</span>
                            <img src="../image/top1.jpg" alt="Hình ảnh 1" className="h-28 w-28 object-cover rounded-full hover:scale-110 duration-300" />
                        </a>
                    </div>
                    <div className="flex items-center  p-4">
                        <a href="#" className="flex items-center w-full">
                            <span className="text-9xl font-bold text-gray-800 ">2</span>
                            <img src="../image/top2.jpg" alt="Hình ảnh 2" className="h-28 w-28 object-cover rounded-full hover:scale-110 duration-300" />
                        </a>
                    </div>
                    <div className="flex items-center  p-4">
                        <a href="#" className="flex items-center w-full">
                            <span className="text-9xl font-bold text-gray-800 ">3</span>
                            <img src="../image/top3.jpg" alt="Hình ảnh 3" className="h-28 w-28 object-cover rounded-full hover:scale-110 duration-300" />
                        </a>
                    </div>
                    <div className="flex items-center  p-4">
                        <a href="#" className="flex items-center w-full">
                            <span className="text-9xl font-bold text-gray-800 ">4</span>
                            <img src="../image/top4.jpg" alt="Hình ảnh 4" className="h-28 w-28 object-cover rounded-full hover:scale-110 duration-300" />
                        </a>
                    </div>
                    <div className="flex items-center  p-4">
                        <a href="#" className="flex items-center w-full">
                            <span className="text-9xl font-bold text-gray-800 ">5</span>
                            <img src="../image/top5.jpg" alt="Hình ảnh 5" className="h-28 w-28 object-cover rounded-full hover:scale-110 duration-300" />
                        </a>
                    </div>
                </div>
            </div>
            <div id="trailer" className="mt-5 mx-auto w-3/4">
                <div className="flex justify-between items-center">
                    <a className="hover:text-red-600 font-bold ml-24" href="">TRAILER</a>
                    <a className="hover:text-red-600 font-bold mr-24" href="">Xem tất cả</a>
                </div>
                <table className="table-auto w-full border-separate border-gray-300 border-spacing-2">
                    <thead>
                        <tr>
                            <td rowSpan="2" colSpan="2" className="align-top">
                                <div className="overflow-hidden h-[16.5rem]">
                                    <img src="../image/trailer_7.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className="align-top">
                                <div className="overflow-hidden h-32">
                                    <img src="../image/trailer_1.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className="align-top">
                                <div className="overflow-hidden h-32">
                                    <img src="../image/trailer_2.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className="align-top">
                                <div className="overflow-hidden h-32">
                                    <img src="../image/trailer_3.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-top">
                                <div className="overflow-hidden h-32">
                                    <img src="../image/trailer_4.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className="align-top">
                                <div className="overflow-hidden h-32">
                                    <img src="../image/trailer_5.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                            <td className="align-top">
                                <div className="overflow-hidden h-32">
                                    <img src="../image/trailer_6.jpg" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
            <div id="phimsapchieu" className="mt-5 mx-auto w-3/4">
                <div className="flex justify-between items-center">
                    <a className="hover:text-red-600 font-bold ml-24" href="" >PHIM SẮP CHIẾU</a>
                    <a className="hover:text-red-600 font-bold mr-24" href="" >Xem tất cả</a>
                </div>
                <table className="table-auto w-full border-separate border-spacing-x-2 border-spacing-y-4">
                    <thead>
                        <tr>
                            <td className=" h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/sapchieu_1.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className=" h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/sapchieu_2.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className="  h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/sapchieu_3.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className="  h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/sapchieu_4.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className="  h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/sapchieu_5.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                        </tr>
                    </thead>

                </table>
            </div>
            <div id="homnayxemgi" className="mt-5 mx-auto w-3/4">
                <div className="flex justify-between items-center">
                    <a className="hover:text-red-600 font-bold ml-24" href="" >HÔM NAY XEM GÌ</a>
                    <a className="hover:text-red-600 font-bold mr-24" href="" >Xem tất cả</a>
                </div>
                <table className="table-auto w-full border-separate border-spacing-x-2 border-spacing-y-4">
                    <thead>
                        <tr>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/xemgi_1.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/xemgi_2.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/xemgi_3.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/xemgi_4.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                            <td className=" border-gray-300 h-64 overflow-hidden cursor-pointer">
                                <div className="w-full h-full">
                                    <img src="../image/xemgi_5.jpg" alt="" className="w-full h-full object-cover hover:scale-110 duration-300" />
                                </div>
                            </td>
                        </tr>
                    </thead>

                </table>
            </div>
        </>
    )
}
export default Bodyy