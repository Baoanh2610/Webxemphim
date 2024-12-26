    import axios from 'axios';
    import { useEffect, useState } from 'react';
    import { Link } from 'react-router-dom';
    import { useNavigate,NavLink } from 'react-router-dom';
    const Listfilm = () => {

        const [usePhimData,setPhimData] = useState([]);
        const navigate = useNavigate();

        const [useSearch, setSearch] = useState('');
        const [useFill, setFill] = useState();

        const xuLySearch = () => {
            const fill = usePhimData.filter((phim) =>
                phim.ten_phim.toLowerCase().includes(useSearch.toLowerCase())
            );
            setFill(fill);
        };
        useEffect(()=> {
            fetchData();
        },[])


        const fetchData = async () => {
            try{
                const result = await axios("http://127.0.0.1:8000/api/phims");
                console.log("Dữ liệu trả về từ API:", result.data.result);
                setPhimData(result.data.result);
                setFill(result.data.result); 

            }catch(error) {
                console.log(error);
            }
        }


            
        const xylyXoa = async (id) => {
            await axios.delete("http://127.0.0.1:8000/api/deletePhim/"+id);
            const newPhimData = usePhimData.filter((item) => {
                return (
                    item.id !== id
                )
            });
            setPhimData(newPhimData);
            setFill(newPhimData);
        }

        // return (
        //     <>
            
        //         <div className='w-full'>
        //             <div className='flex items-center justify-between my-8'>
        //                 <div className='flex items-center justify-center'>
        //                     <h1 className='text-lg ml-4'>Danh sách sản phẩm</h1>
        //                     <button onClick={()=>navigate('/admin/add-phim')} className="text-white bg-red-600 hover:bg-red-800 ml-4 h-12 flex justify-center items-center font-bold  py-1 px-5  rounded" type="submit">
        //                                 Thêm
        //                     </button>
        //                 </div>
        //                 <div className='w-96'>
        //                     <form className="max-w-md mx-auto">   
        //                     <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        //                     <div className="relative">
        //                         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        //                             <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        //                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        //                             </svg>
        //                         </div>
        //                         <input  onChange={(e) => setSearchQuery(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tìm kiếm tên phim" required />
        //                         <button onClick={handleSearch} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        //                     </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         <div className="w-full relative overflow-hidden shadow-md rounded-lg">
        //                 <table className="table-fixed w-full text-left">
        //                     <thead className="uppercase" style={{ backgroundColor: '#555e70', color: '#e5e7eb' }}>
        //                         <tr>
        //                         {/* contentEditable={true} */}

        //                             <td className="py-1 border text-center p-4" >ID</td>
        //                             <td className="py-1 border text-center p-4" >Title</td>
        //                             <td className="py-1 border text-center p-4" >Năm phát hành</td>
        //                             <td className="py-1 border text-center p-4" >Thể loại</td>
        //                             <td className="py-1 border text-center p-4" >Quốc gia</td>
        //                             <td className="py-1 border text-center p-4" >Mô tả</td>
        //                             <td colSpan={3} className="py-1 border text-center p-4" >Thao tác</td>
        //                         </tr>
        //                     </thead>
        //                     <tbody style={{ backgroundColor: '#ffffff', color: '#6b7280' }}>
        //                         {
        //                                 usePhimData.map((phim,i)=> {
        //                                     return (
        //                                         <tr className="py-10" key={i}>
        //                                             <td className="py-10 border text-center p-4">{i + 1}</td>
        //                                             <td className="py-10 border text-center p-4">{phim.ten_phim}</td>
        //                                             <td className="py-10 border text-center p-4">{phim.nam.nam_phat_hanh}</td>
        //                                             <td className="py-10 border text-center p-4">{phim.theloai.map((detail,index)=>(detail.ten_the_loai)).join("\n")}</td>
        //                                             <td className="py-10 border text-center p-4">{phim.quocgia.ten_quoc_gia}</td>
        //                                             <td className="py-10 border text-center p-4">{phim.noi_dung}</td>
        //                                             <td className="py-10 border text-center p-4">
        //                                                 <button onClick={()=>navigate(`/admin/detail-phim/${phim.id}`)} className="bg-blue-500 text-white py-1 px-1 rounded">Chi tiết</button>
        //                                             </td>
        //                                             <td className="py-10 border text-center p-4">
        //                                                 <button onClick={()=>navigate(`/admin/edit-phim/${phim.id}`)} className="bg-blue-500 text-white py-1 px-1 rounded">Sửa</button>
        //                                             </td>
        //                                             <td className="py-10 border text-center p-4">
        //                                                 <button onClick={()=>handleDelete(phim.id)} className="bg-red-500 text-white py-1 px-1 rounded">Xoá</button>
        //                                             </td>
        //                                         </tr>
        //                                     );
        //                                 })
        //                         }

        //                     </tbody>
        //                 </table>
        //             </div>
        //         </div>

        //     </>
        // )
        return (
            <>
                <div className="w-full">
                    <div className="flex items-center justify-between my-8">
                        <div className="flex items-center justify-center">
                            <h1 className="text-lg ml-4">Danh sách sản phẩm</h1>
                            <button
                                onClick={() => navigate("/admin/add-phim")}
                                className="text-white bg-red-600 hover:bg-red-800 ml-4 h-12 flex justify-center items-center font-bold py-1 px-5 rounded"
                                type="submit"
                            >
                                Thêm
                            </button>
                        </div>
                        <div className="w-96">
                            <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                                    Search
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input
                                        onChange={(e) => setSearch(e.target.value)}  // Cập nhật truy vấn tìm kiếm
                                        type="search"
                                        id="default-search"
                                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Tìm kiếm tên phim"
                                        required
                                    />
                                    <button
                                        onClick={xuLySearch}  // Tìm kiếm khi bấm vào nút
                                        type="button"
                                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full relative overflow-hidden shadow-md rounded-lg">
                        <table className="table-fixed w-full text-left">
                            <thead className="uppercase" style={{ backgroundColor: "#555e70", color: "#e5e7eb" }}>
                                <tr>
                                    <td className="py-1 border text-center p-4">ID</td>
                                    <td className="py-1 border text-center p-4">Title</td>
                                    <td className="py-1 border text-center p-4">Năm phát hành</td>
                                    <td className="py-1 border text-center p-4">Thể loại</td>
                                    <td className="py-1 border text-center p-4">Quốc gia</td>
                                    <td className="py-1 border text-center p-4">Mô tả</td>
                                    <td colSpan={3} className="py-1 border text-center p-4">
                                        Thao tác
                                    </td>
                                </tr>
                            </thead>
                            <tbody style={{ backgroundColor: "#ffffff", color: "#6b7280" }}>
                                {
                                    useFill && useFill.length > 0 ? (
                                        useFill.map((phim, i) => {
                                            return (
                                                <tr className="py-10" key={i}>
                                                    <td className="py-10 border text-center p-4">{i + 1}</td>
                                                    <td className="py-10 border text-center p-4">{phim.ten_phim}</td>
                                                    <td className="py-10 border text-center p-4">{phim.nam.nam_phat_hanh}</td>
                                                    <td className="py-10 border text-center p-4">{phim.theloai.map((detail, index) => (detail.ten_the_loai)).join("\n")}</td>
                                                    <td className="py-10 border text-center p-4">{phim.quocgia.ten_quoc_gia}</td>
                                                    <td className="py-10 border text-center p-4">{phim.noi_dung}</td>
                                                    <td className="py-10 border text-center p-4">
                                                        <button onClick={() => navigate(`/admin/detail-phim/${phim.id}`)} className="bg-blue-500 text-white py-1 px-1 rounded">
                                                            Chi tiết
                                                        </button>
                                                    </td>
                                                    <td className="py-10 border text-center p-4">
                                                        <button onClick={() => navigate(`/admin/edit-phim/${phim.id}`)} className="bg-blue-500 text-white py-1 px-1 rounded">
                                                            Sửa
                                                        </button>
                                                    </td>
                                                    <td className="py-10 border text-center p-4">
                                                        <button onClick={() => xylyXoa(phim.id)} className="bg-red-500 text-white py-1 px-1 rounded">
                                                            Xoá
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan="8" className="text-center py-4">Không có kết quả tìm kiếm</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }



    export default Listfilm