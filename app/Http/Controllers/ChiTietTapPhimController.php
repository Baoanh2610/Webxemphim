<?php

namespace App\Http\Controllers;

use App\Models\CTPhim;
use Illuminate\Http\Request;

class ChiTietTapPhimController extends Controller
{
    public function index()
    {
        $ctphims = CTPhim::all(); // Lấy tất cả bản ghi từ bảng 'nam'
        return response()->json([
            'result' => $ctphims
        ],200); // Trả về dữ liệu dưới dạng JSON
    }
}
