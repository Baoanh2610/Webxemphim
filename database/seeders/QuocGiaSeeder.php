<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class QuocGiaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('quoc_gia')->insert([
            ['ten_quoc_gia'=>'Nhật Bản'],
            ['ten_quoc_gia'=>'Hàn Quốc'],
            ['ten_quoc_gia'=>'Việt Nam'],
            ['ten_quoc_gia'=>'Trung Quốc'],
            ['ten_quoc_gia'=>'Trung Quốc'],
            ['ten_quoc_gia'=>'Canada'],
            ['ten_quoc_gia'=>'Thai Lan'],

        ]);
    }
}
