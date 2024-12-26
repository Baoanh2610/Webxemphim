import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Thêm state để hiển thị thông báo lỗi
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Gửi request đăng nhập đến API backend
            const response = await axios.post('http://127.0.0.1:8000/api/admin/login', { email, password });
            console.log(response.data);
            // Kiểm tra nếu login thành công
            if (response.data.success) {
                // Nếu đăng nhập thành công, chuyển hướng đến trang admin dashboard
                navigate('/admin/dashboard');
            } else {
                setErrorMessage('Đăng nhập thất bại. Vui lòng thử lại.');
            }
        } catch (error) {
            // Xử lý lỗi nếu không thể kết nối hoặc có lỗi từ backend
            setErrorMessage('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
            console.log(email, password);
            alert('Login failed');
        }
    };

    // return (

    //     <div className="min-h-screen w-screen bg-slate-600 flex items-center justify-center">
    //         <div className="bg-white rounded-20px max-w-md shadow-black w-full">
    //             <form onSubmit={handleSubmit}>
    //                 <div className="rounded-t-2xl bg-customBG text-center py-8">
    //                     <h1 className="text-3xl text-white">Sign in to your account</h1>
    //                 </div>

    //                 <div className="p-14">
    //                     <div className="text-lg text-black mb-10">
    //                         <div className="mb-4">
    //                             <span>Your email</span>
    //                             <input
    //                                 id="email"
    //                                 value={email}
    //                                 onChange={(e) => setEmail(e.target.value)}
    //                                 className="mt-2 px-3.5 rounded-2xl bg-bgInput w-full h-14 focus:border-sky-700 focus:outline-none border-2"
    //                                 type="email"
    //                                 placeholder="Username"
    //                             />
    //                         </div>

    //                         <div>
    //                             <span>Password</span>
    //                             <input
    //                                 id="password"
    //                                 className="mt-2 px-3.5 rounded-2xl h-14 bg-bgInput w-full focus:border-sky-700 focus:outline-none border-2"
    //                                 type="password"
    //                                 placeholder="Password"
    //                                 onChange={(e) => setPassword(e.target.value)}
    //                                 value={password}
    //                             />
    //                         </div>
    //                     </div>

    //                     {errorMessage && (
    //                         <div className="text-red-500 text-center mb-4">{errorMessage}</div>
    //                     )}

    //                     <div className="text-center">
    //                         <button
    //                             className="h-14 text-base w-full rounded-20px bg-customBG text-white hover:bg-white hover:text-black border-2 border-black transition duration-300 ease-in delay-75"
    //                             type="submit"
    //                         >
    //                             SIGN IN
    //                         </button>
    //                     </div>

    //                     <div className="w-full mt-6 text-lg text-blue-500 font-normal hover:text-blue-950 ">
    //                         <a className="p-2 pl-0" href="/">
    //                             Quên mật khẩu
    //                         </a>
    //                     </div>
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    // );
    return (
        <div className="min-h-screen w-screen bg-slate-600 flex items-center justify-center">
          <div className="bg-white rounded-20px max-w-md shadow-black w-full">
            <form onSubmit={handleSubmit}>
              <div className="rounded-t-2xl bg-customBG text-center py-8">
                <h1 className="text-3xl text-white">Sign in to your account</h1>
              </div>
    
              <div className="p-14">
                <div className="text-lg text-black mb-10">
                  <div className="mb-4">
                    <span>Your email</span>
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 px-3.5 rounded-2xl bg-bgInput w-full h-14 focus:border-sky-700 focus:outline-none border-2"
                      type="email"
                      placeholder="Username"
                    />
                  </div>
    
                  <div>
                    <span>Password</span>
                    <input
                      id="password"
                      className="mt-2 px-3.5 rounded-2xl h-14 bg-bgInput w-full focus:border-sky-700 focus:outline-none border-2"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                </div>
    
                <div className="text-center">
                  <button
                    className="h-14 text-base w-full rounded-20px bg-customBG text-white hover:bg-white hover:text-black border-2 border-black transition duration-300 ease-in delay-75"
                    type="submit"
                  >
                    SIGN IN
                  </button>
                </div>
    
                <div className="w-full mt-6 text-lg text-blue-500 font-normal hover:text-blue-950">
                  <a className="p-2 pl-0" href="/">
                    Quên mật khẩu
                  </a>
                </div>
                {errorMessage && (
                    <div className="text-red-500 text-center mb-4">{errorMessage}</div>
                )}
              </div>
            </form>
          </div>
        </div>
      );
}
export default Login



