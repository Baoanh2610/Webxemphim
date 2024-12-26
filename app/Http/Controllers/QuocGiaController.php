<?php

namespace App\Http\Controllers;

use App\Models\QuocGia;
use Illuminate\Http\Request;

class QuocGiaController extends Controller
{
    public function index() {
        $quocgias = QuocGia::all();

        return response([
            'result' => $quocgias
        ],200);
    }
}
