import { MdDashboard } from "react-icons/md";
import { FaPager } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";
import { FaList } from "react-icons/fa";
import React, {useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <>
        <div className="h-full bg-customBGblack w-[300px] ">
                <ul className="text-colorblack w-full h-screen p-2 ">
                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>                
                                <li className=" w-full flex  items-center  py-2 px-4  ">
                                        <MdDashboard />
                                        <p className="ml-4">Dashboard</p>
                                    
                                </li>
                            </AccordionTrigger>
                            <AccordionContent>
                            <Link to="/admin/listfilm" className="flex items-center mb-4   py-2 px-4 ">
                                <GrUserManager />
                            
                                <p className="ml-4">Quản Lí Phim</p>
                            </Link>
                            <a  href="" className="flex  items-center  mb-4 px-4 ">
                                <FaList />
                                <p className="ml-4">Thể Loại</p>
                                
                            </a>

                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>                
                                <li className=" w-full ">
                    
                                    <div  className="flex items-center   py-2 px-4 ">
                                        <FaPager />
                                        
                                    <p className="ml-4">Pages</p>

                                    </div>
                                </li>
                            </AccordionTrigger>
                            <AccordionContent>
                            <Link  to="/admin/login" className="flex  items-center px-4 ">
                                Login
                            </Link>

                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>                
                                <li className=" w-full ">
                                    <a href="/" className="flex items-center   py-2 px-4 ">
                                <IoMdSettings />
                                        
                                    <p className="ml-4">Setting</p>

                                    </a>
                                </li>
                            </AccordionTrigger>
                            <AccordionContent>
                            <a  href="/" className="flex  items-center px-4 "> Create</a>

                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </ul>
        </div>
        </>
    )
    
}

export default Sidebar
