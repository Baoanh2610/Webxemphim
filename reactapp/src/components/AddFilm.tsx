import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Listfilm from "./listfilm";
const AddFilm = () => {
  const [useNam, setNam] = useState([]);
  const [useQuocGia, setQuocGia] = useState([]);
  const [useTheLoai, setTheLoai] = useState([]);
  useEffect(() => {
    fetchYear();
    fetchQuocGia();
    fetchTheLoai();
  }, []);
  const fetchYear = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/nams");
      setNam(result.data.result);
      console.log(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchQuocGia = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/quocgias");
      setQuocGia(result.data.result);
      console.log(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTheLoai = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/theloais");
      setTheLoai(result.data.result);
      console.log(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const xulyTheLoai = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedIds = selectedOptions.map((option) => parseInt(option.value)); // Lấy ID thể loại
    setPhimData({
      ...usePhimData,
      the_loai_id: selectedIds, // Gán mảng ID thể loại vào state
    });
  };

  const [usePhimData, setPhimData] = useState({
    slug: "",
    ten_phim: "",
    thumb: "",
    loai_phim: "",
    nam_id: "",
    quoc_gia_id: "",
    dien_vien: "",
    noi_dung: "",
    luot_xem: "",
    the_loai_id: [],
    chi_tiet_phim: [
      {
        so_tap: "",
        ten_tap: "",
        link_tap: "",
        thoi_luong: "",
      },
    ],
  });
  const themChiTiet = () => {
    setPhimData((prev) => ({
      ...prev,
      chi_tiet_phim: [
        ...prev.chi_tiet_phim,
        { so_tap: "", ten_tap: "", link_tap: "", thoi_luong: "" },
      ],
    }));
  };

  const xoaChiTiet = (index) => {
    setPhimData((prev) => {
      const update = [...prev.chi_tiet_phim];
      update.splice(index, 1); // Xóa phần tử tại vị trí index
      return {
        ...prev,
        chi_tiet_phim: update,
      };
    });
  };

  const xulyPhim = (e) => {
    setPhimData({
      ...usePhimData,
      [e.target.name]: e.target.value,
    });
    // console.log(usePhimField)
  };
  const xulyChiTiet = (index, field, value) => {
    setPhimData((prev) => {
      const update = [...prev.chi_tiet_phim]; // Tạo bản sao của mảng chi_tiet_phim
      update[index] = {
        ...update[index],
        [field]: value, // Cập nhật trường cụ thể trong chi tiết phim
      };
      return {
        ...prev,
        chi_tiet_phim: update, // Ghi đè chi_tiet_phim trong state
      };
    });
  };
  const [loading, setLoading] = useState();
  const submit = async (e) => {
    e.preventDefault();

    // Chuyển đổi các trường cần thiết thành số
    const cleanedData = {
      ...usePhimData,
      loai_phim: Number(usePhimData.loai_phim), // Chuyển loai_phim thành số
      nam_id: Number(usePhimData.nam_id), // Chuyển nam_id thành số
      quoc_gia_id: Number(usePhimData.quoc_gia_id), // Chuyển quoc_gia_id thành số
      the_loai_id: usePhimData.the_loai_id // Tách chuỗi thành mảng nếu dữ liệu là chuỗi
        .map((id) => String(id).trim())
        // .filter(id => id !== "") // Loại bỏ các giá trị trống
        .map((id) => Number(id)), // Chuyển các ID thể loại thành số
    };

    //  console.log("Dữ liệu gửi đi:", cleanedData); // Kiểm tra dữ liệu đã được chuyển đúng kiểu chưa

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/addPhim",
        cleanedData
      );
      console.log(response.data);
      alert("Thêm phim thành công!");
      setLoading(true);
    } catch (error) {
      console.log(
        "Lỗi khi gửi dữ liệu:",
        error.response?.data || error.message
      );
      alert("Thêm phim thất bại!");
    }
  };
  if (loading) {
    return <Listfilm />;
  }

  return (
    <div className="w-full p-8">
      <h1 className="text-xl font-bold mb-6">Thêm Phim</h1>
      {/* onSubmit={handleSubmit} */}
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Slug</label>
          <input
            type="text"
            name="slug"
            className="w-full p-2 border rounded"
            placeholder="Nhập slug"
            onChange={xulyPhim}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Tên phim
          </label>
          <input
            type="text"
            name="ten_phim"
            className="w-full p-2 border rounded"
            placeholder="Nhập tên phim"
            onChange={xulyPhim}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Thumb</label>
          <input
            type="text"
            name="thumb"
            className="w-full p-2 border rounded"
            placeholder="Nhập link ảnh thumb"
            onChange={xulyPhim}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Loại phim
          </label>
          {/* <input type="number" name="loai_phim" className="w-full p-2 border rounded" placeholder="Nhập loại phim (0: phim lẻ hoặc 1: phim bộ)" onChange={e => changePhimFieldHandler(e)} /> */}

          <select
            onChange={xulyPhim}
            className="w-full p-2 border rounded"
            name="loai_phim"
            id=""
          >
            <option value="">Chọn loại phim</option>

            <option value="0">Phim lẻ</option>

            <option value="1">Phim bộ</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Năm phát hành
          </label>
          <select
            onChange={xulyPhim}
            value={usePhimData.nam_id}
            className="w-full p-2 border rounded"
            name="nam_id"
            id=""
          >
            <option value="">Chọn năm phát hành</option>
            {useNam.map((detail, index) => (
              <option value={detail.id}>{detail.nam_phat_hanh}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Quốc gia
          </label>
          <select
            onChange={xulyPhim}
            className="w-full p-2 border rounded"
            name="quoc_gia_id"
            id=""
          >
            <option value="">Chọn quốc gia</option>

            {useQuocGia.map((detail, index) => (
              <option value={detail.id}>{detail.ten_quoc_gia}</option>
            ))}
          </select>
          {/* <input type="number" name="quoc_gia_id" className="w-full p-2 border rounded" placeholder="Nhập ID quốc gia" onChange={e => changePhimFieldHandler(e)} /> */}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Diễn viên
          </label>
          <input
            type="text"
            name="dien_vien"
            className="w-full p-2 border rounded"
            placeholder="Nhập danh sách diễn viên"
            onChange={xulyPhim}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Nội dung
          </label>
          <textarea
            name="noi_dung"
            className="w-full p-2 border rounded"
            placeholder="Nhập nội dung phim"
            onChange={xulyPhim}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Lượt xem
          </label>
          <input
            type="number"
            name="luot_xem"
            className="w-full p-2 border rounded"
            placeholder="Nhập lượt xem"
            onChange={xulyPhim}
          />
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Thể loại (ID, phân cách bởi dấu phẩy)</label>
          <select onChange={e => changePhimFieldHandler(e)} className="w-full p-2 border rounded" name="ten_the_loai" id="">
            {useTheLoai.map((detail,index)=>(
              <option value={detail.id}>{detail.ten_the_loai}</option>

            ))}
          </select>
          
        </div> */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Thể loại
          </label>
          <select
            multiple
            className="w-full p-2 border rounded"
            onChange={xulyTheLoai} // Gọi hàm khi chọn thể loại
          >
            {useTheLoai.map((detail) => (
              <option key={detail.id} value={detail.id}>
                {detail.ten_the_loai}
              </option>
            ))}
          </select>
        </div>
        {/* {usePhimField.chi_tiet_phim.map((detail, index) => (
          
          <div key={index} className="mb-4 border p-4 rounded">
            <div className="mb-2">
              <label className="block text-gray-700 font-medium mb-2">Số tập</label>
              <input
                name="so_tap"
                type="text"
                // onChange={e => changePhimFieldHandler(e)}
                value={detail.so_tap}
                onChange={(e) => handleDetailChange(index, "so_tap", e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Nhập số tập"
                
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-medium mb-2">Tên tập</label>
              <input
                name="ten_tap"
                type="text"
                value={detail.ten_tap}
                onChange={(e) => handleDetailChange(index, "ten_tap", e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Nhập tên tập"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-medium mb-2">Link tập</label>
              <input
                name="link_tap"

                type="text"
                value={detail.link_tap}
                onChange={(e) => handleDetailChange(index, "link_tap", e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Nhập link tập"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-medium mb-2">Thời lượng</label>
              <input
                type="text"
                name="thoi_luong"
                value={detail.thoi_luong}
                onChange={(e) => handleDetailChange(index, "thoi_luong", e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Nhập thời lượng"
              />
            </div>
            <button
              type="button"
              onClick={() => removeDetail(index)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4">
              Xóa
            </button>
          </div>

        ))} */}
        {usePhimData.loai_phim === "1" && (
          <>
            <h2 className="text-lg font-bold mt-8 mb-4">Chi tiết phim</h2>
            {usePhimData.chi_tiet_phim.map((detail, index) => (
              <div key={index} className="mb-4 border p-4 rounded">
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Số tập
                  </label>
                  <input
                    type="text"
                    value={detail.so_tap}
                    onChange={(e) =>
                      xulyChiTiet(index, "so_tap", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    placeholder="Nhập số tập"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Tên tập
                  </label>
                  <input
                    type="text"
                    value={detail.ten_tap}
                    onChange={(e) =>
                      xulyChiTiet(index, "ten_tap", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    placeholder="Nhập tên tập"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Link tập
                  </label>
                  <input
                    name="link_tap"
                    type="text"
                    value={detail.link_tap}
                    onChange={(e) =>
                      xulyChiTiet(index, "link_tap", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    placeholder="Nhập link tập"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Thời lượng
                  </label>
                  <input
                    type="text"
                    name="thoi_luong"
                    value={detail.thoi_luong}
                    onChange={(e) =>
                      xulyChiTiet(index, "thoi_luong", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    placeholder="Nhập thời lượng"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => xoaChiTiet(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                >
                  Xóa
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={themChiTiet}
              className="bg-green-500 text-white px-4 py-2 rounded mt-4 mr-4"
            >
              Thêm Chi Tiết Phim
            </button>
          </>
        )}

        {usePhimData.loai_phim === "0" && (
          <>
            <h2 className="text-lg font-bold mt-8 mb-4">Chi tiết phim</h2>
            {usePhimData.chi_tiet_phim.slice(0, 1).map((detail, index) => (
              <div key={index} className="mb-4 border p-4 rounded">
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Số tập
                  </label>
                  <input
                    type="text"
                    value={detail.so_tap}
                    onChange={(e) =>
                      xulyChiTiet(index, "so_tap", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    placeholder="Nhập số tập"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Tên tập
                  </label>
                  <input
                    type="text"
                    value={detail.ten_tap}
                    onChange={(e) =>
                      xulyChiTiet(index, "ten_tap", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    placeholder="Nhập tên tập"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Link tập
                  </label>
                  <input
                    name="link_tap"
                    type="text"
                    value={detail.link_tap}
                    onChange={(e) =>
                      xulyChiTiet(index, "link_tap", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    placeholder="Nhập link tập"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Thời lượng
                  </label>
                  <input
                    type="text"
                    name="thoi_luong"
                    value={detail.thoi_luong}
                    onChange={(e) =>
                      xulyChiTiet(index, "thoi_luong", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    placeholder="Nhập thời lượng"
                  />
                </div>
              </div>
            ))}
          </>
        )}

        <button
          onClick={submit}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Lưu
        </button>
      </form>
    </div>
  );
};

export default AddFilm;
