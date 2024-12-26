<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CTPhim extends Model
{
    protected $table = 'chi_tiet_phim';
    protected $fillable = [
        'phim_id',
        'so_tap',
        'ten_tap',
        'link_tap',
        'thoi_luong',
        
    ];
    public function phim()
    {
        return $this->belongsTo(Phim::class, 'phim_id');
    }
}
