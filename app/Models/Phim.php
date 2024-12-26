<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\CTPhim;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Phim extends Model
{
    use HasFactory;
    const LOAI_LE = 0; // Phim lẻ
    const LOAI_BO = 1; // Phim bộ
    protected $table = 'phim';
    protected $fillable = [
        'slug',
        'ten_phim',
        'thumb',
        'loai_phim',
        'nam_id',
        'quoc_gia_id',
        'the_loai_id',
        'dien_vien',
        // 'thoi_luong',
        'noi_dung',
        'luot_xem' ,
    ];


    public function layDanhSachTap($phimId)
    {
        $phim = Phim::with('tapPhim')->find($phimId);
    
        if (!$phim) {
            return response()->json(['message' => 'Phim không tồn tại'], 404);
        }
    
        return response()->json([
            'phim' => $phim,
            'tap_phim' => $phim->tapPhim,
        ]);
    }
    public function chiTietPhim()
    {
        return $this->hasMany(CTPhim::class, 'phim_id');
    }
    
    public function nam() {
        return $this->belongsTo(Nam::class,'nam_id');
    }

    public function quocgia() {
        return $this->belongsTo(QuocGia::class,'quoc_gia_id');
    }

    public function theloai() {
        return $this->belongsToMany(TheLoai::class, 'phim_the_loai', 'phim_id', 'the_loai_id');
    }
}
