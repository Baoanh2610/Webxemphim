import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Aside from './components/Aside'
import CreateMovie from './components/CreateMovie'
import Listfilm from './components/listfilm'
import Menu from './routes/Menu'
import Bodyy from './routes/Bodyy';
const App = () => {
  return (
    <div className='bg-gray-500 min-h-screen w-full flex-center'>
      <div className="content ">
        <Menu />
        <Bodyy></Bodyy>
      </div>
    </div>
    // <BrowserRouter>
    //   <Content />
    // </BrowserRouter>
  );
};

// const Content = () => {
//   const location = useLocation();
//   const isLoginRoute = location.pathname === "/admin";

//   return (
//     <>
//       {!isLoginRoute && <Header />}
//       <div className='main flex'>
//         {!isLoginRoute && <Sidebar />}
//         <Routes>
//           <Route path='/' exact={true} element={<Dashboard />} />
//           <Route path='/dashboard' exact={true} element={<Dashboard />} />
//           <Route path='/listfilm' exact={true} element={<Listfilm />} />
//           <Route path='/admin' element={<Login />} />
//         </Routes>
//       </div>
//     </>
//   );
// };

export default App
