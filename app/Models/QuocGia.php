<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuocGia extends Model
{
    protected $table = 'quoc_gia';
    protected $fillable = [
        'ten_quoc_gia'
    ];
}
