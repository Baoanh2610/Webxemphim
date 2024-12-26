<?php

namespace App\Http\Controllers;

use App\Models\TheLoai;
use Illuminate\Http\Request;

class TheLoaiController extends Controller
{
    public function index()
    {
        $theloais = TheLoai::all(); // Lấy tất cả bản ghi từ bảng 'nam'
        return response()->json([
            'result' => $theloais
        ],200); // Trả về dữ liệu dưới dạng JSON
    }

    public function store(Request $request)
    {
        // Validate dữ liệu
        $request->validate([
            'ten_nam' => 'required|string|max:255',
           
        ]);

        // Tạo bản ghi mới
        $theloai = TheLoai::create([
            'ten_nam' => $request->ten_the_loai,
        ]);

        return response()->json($theloai, 201); // Trả về bản ghi mới được tạo
    }
}
