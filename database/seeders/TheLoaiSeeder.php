<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TheLoaiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('the_loai')->insert([
            ['ten_the_loai'=> 'Hành Động' ],
            ['ten_the_loai'=> 'Phiêu Lưu' ],
            ['ten_the_loai'=> 'Viễn Tưởng' ],
            ['ten_the_loai'=> 'Chính Kịch' ],
            ['ten_the_loai'=> 'Tâm Lý' ],
            ['ten_the_loai'=> 'Bí Ẩn' ],
            ['ten_the_loai'=> 'Kinh Dị' ],
            ['ten_the_loai'=> 'Tình Cảm' ],
            ['ten_the_loai'=> 'Gia Đình' ],
            ['ten_the_loai'=> 'Hài Hước' ],
            ['ten_the_loai'=> 'Hình Sự' ],
            ['ten_the_loai'=> 'Chiến Tranh' ],
        ]);
    }
}
