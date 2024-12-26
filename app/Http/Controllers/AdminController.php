<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function index()
    {
        $admins = Admin::all(); 
        return response()->json([
            'result' => $admins
        ],200); 
    }
    public function login(Request $request)
    {
        // Kiểm tra thông tin email và password
        $admin = Admin::where('email', $request->email)->first();
        
        if ($admin && Hash::check($request->password, $admin->password)) {
            // Nếu thành công, trả về thông báo success
            return response()->json(['success' => true]);
        }
        if (!Hash::check($request->password, $admin->password)) {
            // Nếu mật khẩu không khớp
            return response()->json(['success' => false, 'message' => 'Mật khẩu sai'], 400);
        }
        
        // Nếu thông tin không hợp lệ, trả về thông báo lỗi
        return response()->json(['success' => false]);
    }
}
