<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TheLoai extends Model
{
    protected $table = 'the_loai';
    protected $fillable = [
        'ten_the_loai'
    ];

    public function phim()
    {
        return $this->belongsToMany(Phim::class, 'phim_the_loai', 'the_loai_id', 'phim_id');
    }
}
