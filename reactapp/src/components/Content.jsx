
import Login from '../pages/Login'
import {  Routes,Route,Navigate  } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import  Header  from './Header'
import Sidebar from './Sidebar'
import Listfilm from './listfilm'
import AddFilm from './AddFilm'
import EditFilm from './EditFilm'
import Detail from './DetailFilm'

const Content = () => {
  
    return (
      <>
       <Routes>
            <Route path="/" element={<Navigate to="/admin/login" />} />
            <Route path='/login' exact={true} element={<Login />} />

       </Routes>

        <Header />
        <div className='main flex'>
          <Sidebar />
          <Routes>
            <Route path='/' exact={true} element={<Dashboard />} />
            <Route path='/dashboard' exact={true} element={<Dashboard />} />
            <Route path='/listfilm' exact={true} element={<Listfilm />} />
            <Route path='/add-phim' exact={true} element={<AddFilm/>} />

            <Route path='/edit-phim/:id' exact={true} element={<EditFilm/>} />
            <Route path='/detail-phim/:id' exact={true} element={<Detail/>} />

          </Routes>

        </div>
      </>
    );
  };

  export default Content  
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Dashboard from '../pages/Dashboard';
// import Listfilm from './Listfilm';
// import AddFilm from './AddFilm';
// import EditFilm from './EditFilm';
// import Detail from './DetailFilm';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Login from '../pages/Login';

// // Kiểm tra trạng thái đăng nhập
// const isLoggedIn = () => {
//   return localStorage.getItem("isLoggedIn") === "true"; // Kiểm tra trạng thái đăng nhập
// };

// // Các route của Admin
// const AdminRoutes = () => {
//   if (!isLoggedIn()) {
//     return <Navigate to="/admin/login" />; // Nếu chưa đăng nhập, chuyển hướng về login
//   }

//   return (
//     <>
//       <Header />
//       <div className="main flex">
//         <Sidebar />
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/listfilm" element={<Listfilm />} />
//           <Route path="/add-phim" element={<AddFilm />} />
//           <Route path="/edit-phim/:id" element={<EditFilm />} />
//           <Route path="/detail-phim/:id" element={<Detail />} />
//         </Routes>
//       </div>
//     </>
//   );
// };

// const Content = () => {
//   return (
//     <Routes>
//       {/* Route login */}
//       <Route path="/login" element={<Login />} />

//       {/* Route quản lý admin (kiểm tra đăng nhập) */}
//       <Route path="/admin/*" element={<AdminRoutes />} />

//       {/* Route mặc định chuyển hướng về login nếu chưa đăng nhập */}
//       <Route path="/" element={<Navigate to="/admin/login" />} />
//     </Routes>
//   );
// };

// export default Content;