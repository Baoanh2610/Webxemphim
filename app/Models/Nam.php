<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Nam extends Model
{
    protected $table = 'nam';
    protected $fillable = [
        'nam_phat_hanh'
    ];

    public function phim() {
        return $this->hasMany(Phim::class,'nam_id');
    }
}
