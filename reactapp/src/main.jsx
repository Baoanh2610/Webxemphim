import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.jsx'
import './index.css'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Aside from './components/Aside';
import Layout from './components/Layout';
import CreateMovie from './components/CreateMovie';
import Listfilm from './components/listfilm'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './index.css';

// import App from './App.jsx';
import HanhDong from './Theloai/HanhDong.jsx';
import KinhDi from './Theloai/KinhDi.jsx';
import PhieuLuu from './Theloai/HanhDong.jsx';
import KhoaHoc from './Theloai/HanhDong.jsx';
import KiemHiep from './Theloai/HanhDong.jsx';
import TheThao from './Theloai/HanhDong.jsx';
import HaiHuoc from './Theloai/HanhDong.jsx';
import TinhCam from './Theloai/HanhDong.jsx';
import HoatHinh from './Theloai/HanhDong.jsx';
import LichSu from './Theloai/HanhDong.jsx';
import GiaDinh from './Theloai/HanhDong.jsx';
import VienTuong from './Theloai/HanhDong.jsx';
import My from './Quocgia/My.jsx';
import VietNam from './Quocgia/VietNam.jsx';
import TrungQuoc from './Quocgia/TrungQuoc.jsx';
import HanQuoc from './Quocgia/HanQuoc.jsx';
import MoiNhat from './Nam/MoiNhat.jsx';
import P2017 from './Nam/P2017.jsx';
import P2018 from './Nam/P2018.jsx';
import P2019 from './Nam/P2019.jsx';
import P2020 from './Nam/P2020.jsx';
import P2021 from './Nam/P2021.jsx';
import P2022 from './Nam/P2022.jsx';
import P2023 from './Nam/P2023.jsx';
import BoHQ from './Phimbo/BoHQ.jsx';
import BoTQ from './Phimbo/BoTQ.jsx';
import BoVN from './Phimbo/BoVN.jsx';
import BoMy from './Phimbo/BoMy.jsx';
import Content from './components/Content';

import Watch from './routes/Watch.jsx';
// const router = createBrowserRouter([
//   {
//     path: "/admin",
//     element: <Login/>,
//   },
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [

//       { 
//         path: "/dashboard",element: <Dashboard />
//       },
//       {
//         path: "/createMovie", 
//         element: <CreateMovie/>,
//       },
//       {
//         path: "/aside",
//         element: <Aside/>,
//       },
//     ]
//   },

// ]);

// const isLoginRoute = location.pathname === "/admin";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* <App></App> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/theloai/hanhdong" element={<HanhDong />}></Route>
        <Route path="/theloai/kinhdi" element={<KinhDi />}></Route>
        <Route path="/theloai/phieuluu" element={<PhieuLuu />}></Route>
        <Route path="/theloai/khoahoc" element={<KhoaHoc />}></Route>
        <Route path="/theloai/kiemhiep" element={<KiemHiep />}></Route>
        <Route path="/theloai/thethao" element={<TheThao />}></Route>
        <Route path="/theloai/haihuoc" element={<HaiHuoc />}></Route>
        <Route path="/theloai/tinhcam" element={<TinhCam />}></Route>
        <Route path="/theloai/hoathinh" element={<HoatHinh />}></Route>
        <Route path="/theloai/lichsu" element={<LichSu />}></Route>
        <Route path="/theloai/giadinh" element={<GiaDinh />}></Route>
        <Route path="/theloai/vientuong" element={<VienTuong />}></Route>
        <Route path='/quocgia/my' element={<My />}></Route>
        <Route path='/quocgia/vietnam' element={<VietNam />}></Route>
        <Route path='/quocgia/trungquoc' element={<TrungQuoc />}></Route>
        <Route path='/quocgia/hanquoc' element={<HanQuoc />}></Route>
        <Route path='/phimle/moinhat' element={<MoiNhat />}></Route>
        <Route path='/phimle/2017' element={<P2017 />}></Route>
        <Route path='/phimle/2018' element={<P2018 />}></Route>
        <Route path='/phimle/2019' element={<P2019 />}></Route>
        <Route path='/phimle/2020' element={<P2020 />}></Route>
        <Route path='/phimle/2021' element={<P2021 />}></Route>
        <Route path='/phimle/2022' element={<P2022 />}></Route>
        <Route path='/phimle/2023' element={<P2023 />}></Route>
        <Route path='/phimbo/my' element={<BoMy />}></Route>
        <Route path='/phimbo/trungquoc' element={<BoTQ />}></Route>
        <Route path='/phimbo/vietnam' element={<BoVN />}></Route>
        <Route path='/phimbo/hanquoc' element={<BoHQ />}></Route>
        <Route path='/watch/:id' element={<Watch />}></Route>
        {/* <div  className='main flex'>
        <Route path='/' exact={true} element={<Header />} />
        <Route path='/dashboard' exact={true} element={<Sidebar />} />
        <Route path='/dashboard' exact={true} element={<Dashboard />} />
        <Route path='/listfilm' exact={true} element={<Listfilm />} />
        <Route path='/admin' element={<Login />} />
        </div> */}
        <Route path='/admin/*' exact={true} element={<Content />} ></Route>




      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
