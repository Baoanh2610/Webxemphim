// import { MdDashboard } from "react-icons/md";
// import { FaPager } from "react-icons/fa";
// import { IoMdSettings } from "react-icons/io";
// import { GrUserManager } from "react-icons/gr";
// import { FaList } from "react-icons/fa";
// import React, { useState, useEffect, useRef } from "react";
// import Chart from "chart.js/auto";
// import Listfilm from "../components/listfilm";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import Aside from "../components/Aside";
// import Login from "../pages/Login";

// import CreateMovie from "../components/CreateMovie";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Link } from "react-router-dom";

// const Dashboard: React.FC = () => {
//   const chartRef = useRef<HTMLCanvasElement>(null);
//   const [chartData, setChartData] = useState({
//     labels: ["Thể Loại", "Quản Lí Phim", "Tổng Phim"],
//     datasets: [
//       {
//         label: "My Dataset",
//         data: [7, 30, 37],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//           "rgba(255, 205, 86, 0.2)",
//           "rgba(75,192,192, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(201, 203, 207, 0.2)",
//         ],
//         borderColor: [
//           "rgb(255, 99, 132)",
//           "rgb(255, 159, 64)",
//           "rgb(255, 205, 86)",
//           "rgb(75, 192, 192)",
//           "rgb(54, 162, 235)",
//           "rgb(153, 102, 255)",
//           "rgb(201, 203, 207)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   });

//   useEffect(() => {
//     const ctx = chartRef.current?.getContext("2d");

//     if (ctx && chartData) {
//       const chart = new Chart(ctx, {
//         type: "bar",
//         data: chartData,
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//         },
//       });

//       return () => chart.destroy();
//     }
//   }, [chartData]);
//   return (
//     <>
//       <div className="w-full">
//         <h2 className="h-20 flex items-center text-colorblack">
//           Thống kê phim
//         </h2>

//         <div className="text-colorblack w-full h-60 bg-neutral-900    flex items-center justify-evenly">
//           <div className="w-1/4 bg-customBGblack px-16 py-10 rounded-lg">
//             <p className="text-xl mb-3">Thể Loại</p>
//             <span className="text-6xl">19</span>
//           </div>
//           <div className="w-1/4 bg-customBGblack px-16 py-10 rounded-lg">
//             <p className="text-xl mb-3">Quản Lí Phim</p>
//             <span className="text-6xl">19</span>
//           </div>

//           <div className="w-1/4 bg-customBGblack px-16 py-10 rounded-lg">
//             <p className="text-xl mb-3">Tổng phim</p>
//             <span className="text-6xl">50</span>
//           </div>
//         </div>

//         <div className="w-full h-80 flex-1 box-border  mt-20">
//           <canvas className="" id="myChart" ref={chartRef} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const Dashboard: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [chartData, setChartData] = useState(null);
  const [stats, setStats] = useState({
    soLuongTheLoai: 0,
    soLuongPhimBo:0,
    soLuongPhimLe:0,
    tongPhim: 0,
  });

  // Hàm fetch dữ liệu từ API
  // const fetchData = async () => {
  //   try {
  //     const result = await axios.get("http://127.0.0.1:8000/api/phims");
  //     const data = result.data.result;
  //     console.log(data)
  //     // Tính toán thống kê
  //     const soLuongTheLoai = new Set(
  //       data.flatMap((phim: any) =>
  //         phim.theloai.map((theLoai: any) => theLoai.id)
  //       )
  //     ).size;
  //     const phimBo = data.filter((phim) => phim.loai_phim === 1); // Lọc phim bộ (loai_phim = 1)
  //     const phimLe = data.filter((phim) => phim.loai_phim === 0);

  //     const soLuongPhimBo = phimBo.length;
  //     const soLuongPhimLe = phimLe.length;
  //     const tongPhim = data.length;

  //     // Cập nhật thống kê
  //     setStats({ soLuongTheLoai, soLuongPhim, tongPhim });

  //     // Cập nhật dữ liệu biểu đồ
  //     setChartData({
  //       labels: ["Thể loại", "Phim bộ", "Phim lẻ", "Tổng phim"],
  //       datasets: [
  //         {
  //           label: "Số lượng",
  //           data: [soLuongTheLoai, soLuongPhim, tongPhim],
  //           backgroundColor: [
  //             "rgba(255, 99, 132, 0.2)",
  //             "rgba(255, 159, 64, 0.2)",
  //             "rgba(54, 162, 235, 0.2)",
  //           ],
  //           borderColor: [
  //             "rgb(255, 99, 132)",
  //             "rgb(255, 159, 64)",
  //             "rgb(54, 162, 235)",
  //           ],
  //           borderWidth: 1,
  //         },
  //       ],
  //     });
  //   } catch (error) {
  //     console.error("Lỗi khi gọi API:", error.message);
  //   }
  // };
  const fetchData = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/phims");
      const data = result.data.result;
      console.log(data);
  
      // Tính toán thống kê
      const soLuongTheLoai = new Set(
        data.flatMap((phim: any) =>
          phim.theloai.map((theLoai: any) => theLoai.id)
        )
      ).size;
  
      // Lọc phim bộ và phim lẻ
      const phimBo = data.filter((phim) => phim.loai_phim === 1); // Phim bộ
      const phimLe = data.filter((phim) => phim.loai_phim === 0); // Phim lẻ
  
      // Số lượng phim bộ, phim lẻ và tổng số phim
      const soLuongPhimBo = phimBo.length;
      const soLuongPhimLe = phimLe.length;
      const tongPhim = data.length;
  
      // Cập nhật thống kê
      setStats({
        soLuongTheLoai,
        soLuongPhimBo, // Cập nhật phim bộ
        soLuongPhimLe, // Cập nhật phim lẻ
        tongPhim,
      });
  
      // Cập nhật dữ liệu biểu đồ
      setChartData({
        labels: ["Thể loại", "Phim bộ", "Phim lẻ", "Tổng phim"],
        datasets: [
          {
            label: "Số lượng",
            data: [soLuongTheLoai, soLuongPhimBo, soLuongPhimLe, tongPhim], // Sửa lại dữ liệu ở đây
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(75,192,192, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(54, 162, 235)",
              "rgb(75, 192, 192)",
            ],
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      console.error("Lỗi khi gọi API:", error.message);
    }
  };

  // useEffect để gọi API và render biểu đồ
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current && chartData) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const chart = new Chart(ctx, {
          type: "bar",
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });

        // Cleanup chart khi component unmount
        return () => chart.destroy();
      }
    }
  }, [chartData]);

  return (
    <>
      <div className="w-full">
        <h2 className="h-20 flex items-center text-colorblack">Thống kê phim</h2>

        {/* Hiển thị thống kê */}
        <div className="text-colorblack w-full h-60 bg-neutral-900 flex items-center justify-evenly">
          <div className="w-1/5 bg-customBGblack px-16 py-10 rounded-lg">
            <p className="text-xl mb-3">Thể Loại</p>
            <span className="text-6xl">{stats.soLuongTheLoai}</span>
          </div>
          <div className="w-1/5 bg-customBGblack px-16 py-10 rounded-lg">
            <p className="text-xl mb-3">Phim bộ</p>
            <span className="text-6xl">{stats.soLuongPhimBo}</span>
          </div>
          <div className="w-1/5 bg-customBGblack px-16 py-10 rounded-lg">
            <p className="text-xl mb-3">Phim lẻ</p>
            <span className="text-6xl">{stats.soLuongPhimLe}</span>
          </div>

          <div className="w-1/5 bg-customBGblack px-16 py-10 rounded-lg">
            <p className="text-xl mb-3">Tổng phim</p>
            <span className="text-6xl">{stats.tongPhim}</span>
          </div>
        </div>

        {/* Hiển thị biểu đồ */}
        <div className="w-full h-80 flex-1 box-border mt-20">
          <canvas className="" id="myChart" ref={chartRef} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;