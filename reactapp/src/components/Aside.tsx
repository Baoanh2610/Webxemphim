// import React, {useState, useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// // import { Link } from "lucide-react";
// import { Link } from 'react-router-dom';
// const Aside = () => {
//     const chartRef = useRef<HTMLCanvasElement>(null);
//     const [chartData, setChartData] = useState({
//       labels: ['Thể Loại', 'Quản Lí Phim', 'Tổng Phim'],
//       datasets: [{
//         label: 'My Dataset',
//         data: [7,30,37],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//           'rgba(255, 205, 86, 0.2)',
//           'rgba(75,192,192, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(201, 203, 207, 0.2)',
//         ],
//         borderColor: [
//           'rgb(255, 99, 132)',
//           'rgb(255, 159, 64)',
//           'rgb(255, 205, 86)',
//           'rgb(75, 192, 192)',
//           'rgb(54, 162, 235)',
//           'rgb(153, 102, 255)',
//           'rgb(201, 203, 207)',
//         ],
//         borderWidth: 1,
//       }],
//     });
  
//     useEffect(() => {
//       const ctx = chartRef.current?.getContext('2d');
  
//       if (ctx && chartData) {
//         const chart = new Chart(ctx, {
//           type: 'bar', 
//           data: chartData,
//           options: {
//             responsive: true,
//             maintainAspectRatio: false
//           }
//         });
  
        
//         return () => chart.destroy();
//       }
//     }, [chartData]);
//     return (
//         <>
//             <div className="w-full"> 
//                 <div className="">
//                         <h2 className="h-20 flex items-center text-colorblack">Thống kê phim</h2>

//                         <div className="text-colorblack w-full h-60 bg-neutral-900    flex items-center justify-evenly">
//                             <div className="w-1/4 bg-customBGblack px-16 py-10 rounded-lg">
//                                 <p className="text-xl mb-3">Thể Loại</p>
//                                 <span className="text-6xl" >19</span>
//                             </div>
//                             <div className="w-1/4 bg-customBGblack px-16 py-10 rounded-lg">
//                                 <p className="text-xl mb-3">Quản Lí Phim</p>
//                                 <span className="text-6xl">19</span>
//                             </div>

//                             <div className="w-1/4 bg-customBGblack px-16 py-10 rounded-lg">
//                                 <p className="text-xl mb-3">Tổng phim</p>
//                                 <span className="text-6xl">50</span>
//                             </div>
//                         </div>
                
//                             {/* <div className="w-full h-80 flex-1 box-border  mt-20">
//                                 <canvas className="" id="myChart" ref={chartRef} />
//                             </div> */}
//                 </div>

            
//             </div>
//         </>
//     )
// }



// export default Aside


import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const Aside = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios("http://127.0.0.1:8000/api/phims");
      const data = response.data.result
      console.log("Dữ liệu trả về từ API:", response.data.result);
      console.log(response.data.result)
      // Cập nhật chartData dựa trên dữ liệu từ API
      setChartData({
        labels: ['Thể Loại', 'Quản Lí Phim', 'Tổng Phim'],
        datasets: [
          {
            label: 'Số lượng',
            data: [data.the_loai, data.quan_li_phim, data.tong_phim],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(75, 192, 192)',
            ],
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  };

  useEffect(() => {
    if (chartRef.current && chartData) {
      const ctx = chartRef.current.getContext('2d');
      const chart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });

      return () => chart.destroy();
    }
  }, [chartData]);

  return (
    <>
      <div className="w-full">
        <div className="text-colorblack w-full h-80 bg-neutral-900 flex items-center justify-evenly">
          <div className="w-1/4 bg-customBGblack px-16 py-10 rounded-lg">
            <p className="text-xl mb-3">Thể Loại</p>
            <span className="text-6xl">{chartData?.datasets[0]?.data[0] || 0}</span>
          </div>
          <div className="w-1/4 bg-customBGblack px-16 py-10 rounded-lg">
            <p className="text-xl mb-3">Quản Lí Phim</p>
            <span className="text-6xl">{chartData?.datasets[0]?.data[1] || 0}</span>
          </div>
          <div className="w-1/4 bg-customBGblack px-16 py-10 rounded-lg">
            <p className="text-xl mb-3">Tổng phim</p>
            <span className="text-6xl">{chartData?.datasets[0]?.data[2] || 0}</span>
          </div>
        </div>

        <div className="w-full h-80 mt-8">
          <canvas ref={chartRef} />
        </div>
      </div>
    </>
  );
};

export default Aside;