<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Nam;

class NamController extends Controller
{ // Lấy tất cả các bản ghi năm
    public function index()
    {
        $nams = Nam::all(); // Lấy tất cả bản ghi từ bảng 'nam'
        return response()->json([
            'result' => $nams
        ],200); // Trả về dữ liệu dưới dạng JSON
    }

    // Lấy một bản ghi năm theo ID
    public function show($id)
    {
        $nam = Nam::find($id); // Tìm bản ghi năm theo id
        if (!$nam) {
            return response()->json(['message' => 'Năm không tồn tại'], 404);
        }
        return response()->json($nam); // Trả về bản ghi dưới dạng JSON
    }

    // Tạo một bản ghi năm mới
    public function store(Request $request)
    {
        // Validate dữ liệu
        $request->validate([
            'ten_nam' => 'required|string|max:255',
           
        ]);

        // Tạo bản ghi mới
        $nam = Nam::create([
            'ten_nam' => $request->nam_phat_hanh,
        ]);

        return response()->json($nam, 201); // Trả về bản ghi mới được tạo
    }

    // Cập nhật thông tin bản ghi năm
    public function update(Request $request, $id)
    {
        $nam = Nam::find($id); // Tìm bản ghi theo id
        if (!$nam) {
            return response()->json(['message' => 'Năm không tồn tại'], 404);
        }

        // Validate dữ liệu
        $request->validate([
            'ten_nam' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        // Cập nhật bản ghi
        $nam->update([
            'ten_nam' => $request->ten_nam,
            'description' => $request->description,
        ]);

        return response()->json($nam); // Trả về bản ghi đã được cập nhật
    }

    // Xóa bản ghi năm
    public function destroy($id)
    {
        $nam = Nam::find($id); // Tìm bản ghi theo id
        if (!$nam) {
            return response()->json(['message' => 'Năm không tồn tại'], 404);
        }

        $nam->delete(); // Xóa bản ghi

        return response()->json(['message' => 'Năm đã được xóa']); // Trả về thông báo đã xóa
    }
}
