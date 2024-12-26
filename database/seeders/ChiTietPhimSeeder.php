<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Phim;
class ChiTietPhimSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $phimDanDaDan = Phim::where('slug', 'dan-da-dan')->first(); // Lấy phim bằng slug
        $phimId = $phimDanDaDan->id;

        $phimCuLaoXacSong = Phim::where('slug', 'cu-lao-xac-song')->first(); // Lấy phim bằng slug
        $phimId2 = $phimCuLaoXacSong->id;

        $phimTrungTa = Phim::where('slug', 'trung-ta')->first(); // Lấy phim bằng slug
        $phimId3 = $phimTrungTa->id;

        $phimThuMoNhan = Phim::where('slug', 'hoang-ha-thu-mo-nhan')->first(); // Lấy phim bằng slug
        $phimId4 = $phimThuMoNhan->id;

        $phimKhuRungKyQuai = Phim::where('slug', 'khu-rung-ky-quai')->first(); // Lấy phim bằng slug
        $phimId5 = $phimKhuRungKyQuai->id;

        $phimMoiTinhGiangSinh = Phim::where('slug', 'moi-tinh-giang-sinh')->first(); // Lấy phim bằng slug
        $phimId6 = $phimMoiTinhGiangSinh->id;

        $phimTroChoiSinhTon = Phim::where('slug', 'tro-choi-sinh-ton')->first(); // Lấy phim bằng slug
        $phimId7 = $phimTroChoiSinhTon->id;

        $phimAnhHungTP = Phim::where('slug', 'anh-hung-thanh-pho')->first(); // Lấy phim bằng slug
        $phimId8 = $phimAnhHungTP->id;

        $phimNhipDapConTim = Phim::where('slug', 'thame-po-nhip-dap-con-tim')->first(); // Lấy phim bằng slug
        $phimId9 = $phimNhipDapConTim->id;

        
        $phimTroChoiConMuc1 = Phim::where('slug', 'tro-choi-con-muc-phan-1')->first(); // Lấy phim bằng slug
        $phimId10 = $phimTroChoiConMuc1->id;

        $phimTroChoiConMuc2 = Phim::where('slug', 'tro-choi-con-muc-phan-2')->first(); // Lấy phim bằng slug
        $phimId11 = $phimTroChoiConMuc2->id;

        DB::table('chi_tiet_phim')->insert([
            [
                'phim_id' => $phimId, // Dẫn đến phim 'DAN DA DAN'
                'so_tap' => '12 tập',
                'ten_tap' => 'Tập 01',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s5.phim1280.tv/20241005/Lxuqvsik/index.m3u8',
                'thoi_luong' => '24 phút',
            ],
            [
                'phim_id' => $phimId, // Dẫn đến phim 'DAN DA DAN'
                'so_tap' => '12 tập',
                'ten_tap' => 'Tập 02',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s5.phim1280.tv/20241011/S2Nrzt6F/index.m3u8',
                'thoi_luong' => '24 phút',
            ],

            [
                'phim_id' => $phimId2, 
                'so_tap' => '1 tập',
                'ten_tap' => 'FULL',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s5.phim1280.tv/20241122/Onp4JKoq/index.m3u8',
                'thoi_luong' => '93 phút',
            ],


            [
                
                  'phim_id' =>  $phimId3,
                  'so_tap' => '1 tập',
                  'ten_tap' => 'FULL',
                  'link_tap' => 'https://player.phimapi.com/player/?url=https://s4.phim1280.tv/20241225/VCezUFlo/index.m3u8',
                  'thoi_luong'=> '88 phút'
                
            ],     
            [
                    'phim_id' => $phimId4,
                    'so_tap' => '1 tập',
                    'ten_tap' => 'FULL',
                    'link_tap' => 'https://player.phimapi.com/player/?url=https://s4.phim1280.tv/20241225/NDKbbhR0/index.m3u8',
                    'thoi_luong' => '90 phút',
            ],

            [
                'phim_id' => $phimId5,
                'so_tap' => '1 tập',
                'ten_tap' => 'FULL',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s4.phim1280.tv/20241225/FPlZ3ogS/index.m3u8',
                'thoi_luong' => '104 phút',
            ],

            [
                'phim_id' => $phimId6,
                'so_tap' => '1 tập',
                'ten_tap' => 'FULL',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s4.phim1280.tv/20241224/JWUOpr5V/index.m3u8',
                'thoi_luong' => '90 phút',
            ],

            [
                'phim_id' => $phimId7,
                'so_tap' => '1 tập',
                'ten_tap' => 'FULL',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s4.phim1280.tv/20241224/flkx8oOq/index.m3u8',
                'thoi_luong' => '117 phút',
            ],


            [
                'phim_id' => $phimId8,
                'so_tap' => '1 tập',
                'ten_tap' => 'FULL',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s5.phim1280.tv/20241220/8xtfYUJP/index.m3u8',
                'thoi_luong' => '88 phút',
            ],


            [
                'phim_id' => $phimId9,
                'so_tap' => '2 tập',
                'ten_tap' => 'tập 1',
                'link_tap' => 'https://s4.phim1280.tv/20241218/J3lhDW9H/index.m3u8',
                'thoi_luong' => '49 phút',
            ],

            [
                'phim_id' => $phimId9,
                'so_tap' => '2 tập',
                'ten_tap' => 'tập 2',
                'link_tap' => 'https://s4.phim1280.tv/20241225/J0UEIfST/index.m3u8',
                'thoi_luong' => '49 phút',
            ],


            [
                'phim_id' => $phimId10,
                'so_tap' => '9 tập',
                'ten_tap' => 'tập 1',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s3.phim1280.tv/20240425/zc68KvFb/index.m3u8',
                'thoi_luong' => '50 phút',
            ],
            [
                'phim_id' => $phimId10,
                'so_tap' => '9 tập',
                'ten_tap' => 'tập 2',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s3.phim1280.tv/20240425/h1h2MjET/index.m3u8',
                'thoi_luong' => '50 phút',
            ],
            [
                'phim_id' => $phimId10,
                'so_tap' => '9 tập',
                'ten_tap' => 'tập 3',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s3.phim1280.tv/20240425/w8DyQAGW/index.m3u8',
                'thoi_luong' => '50 phút',
            ],
            [
                'phim_id' => $phimId10,
                'so_tap' => '9 tập',
                'ten_tap' => 'tập 4',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s3.phim1280.tv/20240425/aklWUl9g/index.m3u8',
                'thoi_luong' => '50 phút',
            ],
            [
                'phim_id' => $phimId10,
                'so_tap' => '9 tập',
                'ten_tap' => 'tập 5',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s3.phim1280.tv/20240425/fPtlHGfO/index.m3u8',
                'thoi_luong' => '50 phút',
            ],
            [
                'phim_id' => $phimId10,
                'so_tap' => '9 tập',
                'ten_tap' => 'tập 6',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s3.phim1280.tv/20240425/Rh8aMXaA/index.m3u8',
                'thoi_luong' => '50 phút',
            ],
            [
                'phim_id' => $phimId10,
                'so_tap' => '9 tập',
                'ten_tap' => 'tập 7',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s3.phim1280.tv/20240425/ECgZRvnA/index.m3u8',
                'thoi_luong' => '50 phút',
            ],
            [
                'phim_id' => $phimId10,
                'so_tap' => '9 tập',
                'ten_tap' => 'tập 8',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s3.phim1280.tv/20240425/dNfGYPFk/index.m3u8',
                'thoi_luong' => '50 phút',
            ],
            [
                'phim_id' => $phimId10,
                'so_tap' => '9 tập',
                'ten_tap' => 'tập 9',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s3.phim1280.tv/20240425/XMn3C6wR/index.m3u8',
                'thoi_luong' => '50 phút',
            ],



            [
                'phim_id' => $phimId11,
                'so_tap' => '7 tập',
                'ten_tap' => 'tập 1',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s5.phim1280.tv/20241226/3516KWoY/index.m3u8',
                'thoi_luong' => '60 phút',
            ],
            [
                'phim_id' => $phimId11,
                'so_tap' => '7 tập',
                'ten_tap' => 'tập 2',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s5.phim1280.tv/20241226/m9ZEu1zu/index.m3u8',
                'thoi_luong' => '60 phút',
            ],
            [
                'phim_id' => $phimId11,
                'so_tap' => '7 tập',
                'ten_tap' => 'tập 3',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s5.phim1280.tv/20241226/4uviqIng/index.m3u8',
                'thoi_luong' => '60 phút',
            ],
            [
                'phim_id' => $phimId11,
                'so_tap' => '7 tập',
                'ten_tap' => 'tập 4',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s5.phim1280.tv/20241226/gU6djhRv/index.m3u8',
                'thoi_luong' => '60 phút',
            ],
            [
                'phim_id' => $phimId11,
                'so_tap' => '7 tập',
                'ten_tap' => 'tập 5',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s5.phim1280.tv/20241226/hx5HH8es/index.m3u8',
                'thoi_luong' => '60 phút',
            ],
            [
                'phim_id' => $phimId11,
                'so_tap' => '7 tập',
                'ten_tap' => 'tập 6',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s5.phim1280.tv/20241226/RPAfD9Do/index.m3u8',
                'thoi_luong' => '60 phút',
            ],
            [
                'phim_id' => $phimId11,
                'so_tap' => '7 tập',
                'ten_tap' => 'tập 7',
                'link_tap' => 'https://player.phimapi.com/player/?url=https://s5.phim1280.tv/20241226/XyOULj0V/index.m3u8',
                'thoi_luong' => '60 phút',
            ],

        ]);
    }
}
