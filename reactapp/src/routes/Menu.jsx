import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true); // Trạng thái để chuyển đổi giữa đăng nhập và đăng ký

    // Hàm hiển thị form đăng nhập khi nhấn vào icon user
    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    // Hàm chuyển giữa form đăng nhập và đăng ký
    const toggleFormType = () => {
        setIsLoginForm(!isLoginForm);
    };


    return (
        <div id="menu" className="bg-gray-800 pb-2 pt-2 sticky top-0 z-50">
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
                    <a className="hover:text-red-600" href="">NĂM</a>
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
                <FontAwesomeIcon icon={faUser} size="2x" className='mr-9 hover:text-red-600 cursor-pointer' onClick={toggleLoginForm} />

            </nav>
            <div
                className={`fixed top-0 right-0 w-1/4 h-full bg-gray-800 transform transition-transform duration-500 ${showLoginForm ? 'translate-x-0' : 'translate-x-full'} p-4`}
            >
                <h2 className="text-white text-2xl mb-4">{isLoginForm ? 'Đăng Nhập' : 'Đăng Ký'}</h2>
                <form autoComplete="off">
                    {/* Dummy input để chặn autofill */}
                    <input type="text" style={{ display: 'none' }} />
                    <input type="password" style={{ display: 'none' }} />

                    <div className="mb-4">
                        <label className="block text-white">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full p-2 mt-1 rounded"
                            placeholder="Nhập email"
                            autoComplete="new-password" // Thay đổi giá trị autoComplete
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white">Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="w-full p-2 mt-1 rounded"
                            placeholder="Nhập mật khẩu"
                            autoComplete="new-password" // Thay đổi giá trị autoComplete
                        />
                    </div>
                    {!isLoginForm && (
                        <div className="mb-4">
                            <label className="block text-white">Xác nhận mật khẩu</label>
                            <input
                                type="password"
                                name="confirm_password"
                                id="confirm_password"
                                className="w-full p-2 mt-1 rounded"
                                placeholder="Xác nhận mật khẩu"
                                autoComplete="new-password" // Thay đổi giá trị autoComplete
                            />
                        </div>
                    )}
                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded">
                        {isLoginForm ? 'Đăng Nhập' : 'Đăng Ký'}
                    </button>
                </form>


                <button
                    className="absolute top-4 right-4 text-white text-2xl"
                    onClick={toggleLoginForm}
                >
                    &times;
                </button>
                <div className="text-center mt-4">
                    <button
                        className="text-white text-sm hover:text-red-600"
                        onClick={toggleFormType}
                    >
                        {isLoginForm ? 'Chưa có tài khoản? Đăng Ký' : 'Đã có tài khoản? Đăng Nhập'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Menu;
