<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Phim;
use App\Models\CTPhim;
use App\Http\Requests\PhimStoreRequest;
use Illuminate\Container\Attributes\DB;
use Illuminate\Support\Facades\Log;
class PhimController extends Controller
{
    public function index() {
        // $phims = Phim::all();
        $phims = Phim::with(['theloai', 'quocgia', 'nam'])->get();
        return response()->json([
            'result' => $phims
        ],200);
    }
    // $phim = Phim::with('chi_tiet_phim')->find($id);
    
    public function show($id) {
        try{
            // $phim = Phim::find($id);
            $phim = Phim::with(['chiTietPhim','theloai','quocgia','nam'])->find($id);
            
        if (!$phim) {
            return response()->json([
                'message' => 'Phim không tồn tại'
            ], 404);
        }
        Log::info('Phim data: ', ['phim' => $phim]);
        return response()->json([
            'phims' => $phim,
        ], 200);

    } catch (\Exception $e) {
        // Log lỗi nếu có
        Log::error('Lỗi khi lấy dữ liệu phim: ' . $e->getMessage());
        return response()->json([
            'message' => 'Đã xảy ra lỗi khi lấy dữ liệu'
        ], 500);
    }
    }

    public function destroy($id) {

        // Log::info("Request received to delete ID: $id");
        $phim = Phim::find($id);


        if(!$phim) {
            return response()->json([
                'message' => 'User not find'
            ],404);
        }

        $phim->delete();
        return response()->json([
            'message' => 'xoa thanh cong'
        ],200);


    }

    public function update(PhimStoreRequest $request, $id)
    {
        try {
            // Log::info('Request Data: ', $request->all());
            $phim = Phim::find($id);
    
            if (!$phim) {
                return response()->json([
                    'message' => 'Không tìm thấy phim.'
                ], 404);
            }
            
           $phim->ten_phim = $request->ten_phim;
           $phim->thumb = $request->thumb;
           $phim->loai_phim = $request->loai_phim;
           $phim->nam_id = $request->nam_id;
           $phim->quoc_gia_id = $request->quoc_gia_id;
           $phim->dien_vien = $request->dien_vien;
           $phim->noi_dung = $request->noi_dung;
           $phim->luot_xem = $request->luot_xem;
            $phim->theloai()->sync($request->the_loai_id);
            foreach ($request->chi_tiet_phim as $chitiet) {
                $phim->chiTietPhim()->updateOrCreate([
                    'phim_id' => $phim->id,
                    'so_tap' => $chitiet['so_tap'],
                    'ten_tap' => $chitiet['ten_tap'],
                    'link_tap' => $chitiet['link_tap'],
                    'thoi_luong' => $chitiet['thoi_luong'],
                ]);
            }

           $phim->save();
        // $phim->update($request->only([
        //     'ten_phim', 'thumb', 'loai_phim', 'nam_id', 'quoc_gia_id', 'dien_vien', 'noi_dung', 'luot_xem'
        // ]));
    
            return response()->json([
                'message' => 'Cập nhật thành công.',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Đã xảy ra lỗi.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    

    public function store(PhimStoreRequest $request)
    {
        //return $request->all();
        // Tạo bản ghi mới
        try{
            $phim = Phim::create([
                'slug' => $request->slug,
                'ten_phim' => $request->ten_phim,
                'thumb' => $request->thumb,
                'loai_phim' => $request->loai_phim,
                'nam_id' => $request->nam_id,
                'quoc_gia_id' => $request->quoc_gia_id,
                'dien_vien' => $request->dien_vien,
                'noi_dung' => $request->noi_dung,
                'luot_xem' => $request->luot_xem,
                // 'the_loai_id' => $request->the_loai_id
            ]);
            
            $newTheLoai = $request->the_loai_id; // Thể loại mới từ request
            $currentTheLoaiIds = $phim->theloai()->pluck('the_loai_id')->toArray(); // Lấy ID các thể loại hiện tại
    
            // Lặp qua từng thể loại mới, kiểm tra và chỉ cập nhật nếu cần
            foreach ($newTheLoai as $theLoaiId) {
                if (!in_array($theLoaiId, $currentTheLoaiIds)) {
                    // Nếu thể loại chưa có, thêm nó vào bảng pivot
                    $phim->theloai()->attach($theLoaiId);
                }
            }

            if ($request->has('chi_tiet_phim')) {
                foreach ($request->chi_tiet_phim as $chitiet) {
                    $phim->chiTietPhim()->create([
                        
                        'so_tap' => $chitiet['so_tap'],
                        'ten_tap' => $chitiet['ten_tap'],
                        'link_tap' => $chitiet['link_tap'],
                        'thoi_luong' => $chitiet['thoi_luong'],
                        'phim_id' => $phim->id,
                    ]);
                }
            }
            return response()->json([
                'message' => 'tao thanh cong',
                'data' => $phim
            ],200);
            //Log::error('Error: ' . $e->getMessage());
        } catch(\Exception $e) {
            //Log::error('Error: ' . $e->getMessage());
            return response()->json([
                'message' => 'khong them duoc',
                'error' => $e->getMessage()  // In ra thông báo chi tiết của lỗi
            ],500);
        }
        
        // $phimId = $phim->id;
        // CTPhim::create([
        //     'phim_id' => $phim->id,
        //     'tap_so' => 1,
        //     'ten_tap' => null, // Không cần thiết cho phim lẻ
        //     'link' => 'link_phim_le.mp4',
        //     'thoi_luong' => '120 phút',
        // ]);
        // CTPhim::create([
        //     'phim_id' => $phim->id,
        //     'tap_so' => 1,
        //     'ten_tap' => 'Tập 1',
        //     'link' => 'link_phim_bo_tap1.mp4',
        //     'thoi_luong' => '45 phút',
        // ]);
        
        // CTPhim::create([
        //     'phim_id' => $phim->id,
        //     'tap_so' => 2,
        //     'ten_tap' => 'Tập 2',
        //     'link' => 'link_phim_bo_tap2.mp4',
        //     'thoi_luong' => '50 phút',
        // ]);

        // return response()->json([
        //     'phim_id' => $phimId,
        //     'phim' => $phim
        // ],201); // Trả về bản ghi mới được tạo


        
    }


}
