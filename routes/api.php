<?php

use App\Http\Controllers\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PhimController;
use App\Http\Controllers\NamController;
use App\Http\Controllers\ChiTietTapPhimController;
use App\Http\Controllers\QuocGiaController;
use App\Http\Controllers\TheLoaiController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
//});

Route::get('users', [UserController::class, 'index']);
Route::get('admins', [AdminController::class, 'index']);
Route::post('admin/login', [AdminController::class, 'login']);


Route::get('phims', [PhimController::class, 'index']);
Route::post('addPhim', [PhimController::class, 'store']);
Route::put('updatePhim/{id}', [PhimController::class, 'update']);
Route::get('phims/{id}', [PhimController::class, 'show']);
Route::delete('deletePhim/{id}', [PhimController::class, 'destroy']);

Route::get('chitietphims', [ChiTietTapPhimController::class, 'index']);

Route::get('nams', [NamController::class, 'index']);

Route::get('theloais', [TheLoaiController::class, 'index']);

Route::get('quocgias', [QuocGiaController::class, 'index']);


// Route::get('/nams', [NamController::class, 'index']);
// Route::get('/nams/{id}', [NamController::class, 'show']);
// Route::post('/nams', [NamController::class, 'store']);
// Route::put('/nams/{id}', [NamController::class, 'update']);
// Route::delete('/nams/{id}', [NamController::class, 'destroy']);