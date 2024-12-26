import { Outlet,Routes,useLocation , Route } from "react-router-dom"
import Aside from "./Aside"
import Dashboard from "@/pages/Dashboard"
import Login from "@/pages/Login"
import CreateMovie from "./CreateMovie"
import React, { useState } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
const Layout: React.FC= () => {
    const location = useLocation();

    return (
        <div className="flex bg-customBGblack">
            <Dashboard/>

            {location.pathname === '/dashboard' ? (
                <CreateMovie />
            ) : (
                <Aside />
            )}
            <Outlet />
        </div>


    )
}

export default Layout