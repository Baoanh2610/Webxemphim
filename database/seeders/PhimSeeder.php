<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\QuocGia;
class PhimSeeder extends Seeder
{

    public function run(): void
    {   
     
    $theLoaiHanhDong = DB::table('the_loai')->where('ten_the_loai', 'Hành Động')->first()->id;
    $theLoaiPhieuLuu = DB::table('the_loai')->where('ten_the_loai', 'Phiêu Lưu')->first()->id;
    $theLoaiVienTuong = DB::table('the_loai')->where('ten_the_loai', 'Viễn Tưởng')->first()->id;
    $theLoaiChinhKich = DB::table('the_loai')->where('ten_the_loai', 'Chính Kịch')->first()->id;
    $theLoaiTamLy = DB::table('the_loai')->where('ten_the_loai', 'Tâm Lý')->first()->id;
    $theLoaiBiAn = DB::table('the_loai')->where('ten_the_loai', 'Bí Ẩn')->first()->id;
    $theLoaiKinhDi = DB::table('the_loai')->where('ten_the_loai', 'Kinh Dị')->first()->id;
    $theLoaiTinhCam = DB::table('the_loai')->where('ten_the_loai', 'Tình Cảm')->first()->id;
    $theLoaiGiaDinh = DB::table('the_loai')->where('ten_the_loai', 'Gia Đình')->first()->id;
    $theLoaiHaiHuoc = DB::table('the_loai')->where('ten_the_loai', 'Hài Hước')->first()->id;
    $theLoaiChienTranh = DB::table('the_loai')->where('ten_the_loai', 'Chiến Tranh')->first()->id;
    $theLoaiHinhSu = DB::table('the_loai')->where('ten_the_loai', 'Hình Sự')->first()->id;


    // Lấy ID năm và quốc gia
    $N2024 = DB::table('nam')->where('nam_phat_hanh', 2024)->first()->id;
    $N2022 = DB::table('nam')->where('nam_phat_hanh', 2022)->first()->id;
    $N2023 = DB::table('nam')->where('nam_phat_hanh', 2023)->first()->id;
    $N2021 = DB::table('nam')->where('nam_phat_hanh', 2021)->first()->id;
    $N2014 = DB::table('nam')->where('nam_phat_hanh', 2014)->first()->id;
    $quocGiaNhatBan = DB::table('quoc_gia')->where('ten_quoc_gia', 'Nhật Bản')->first()->id;
    $quocGiaHanQuoc = DB::table('quoc_gia')->where('ten_quoc_gia', 'Hàn Quốc')->first()->id;
    $quocGiaVietNam = DB::table('quoc_gia')->where('ten_quoc_gia', 'Việt Nam')->first()->id;
    $quocGiaHanQuoc = DB::table('quoc_gia')->where('ten_quoc_gia', 'Hàn Quốc')->first()->id;
    $quocGiaCanada = DB::table('quoc_gia')->where('ten_quoc_gia', 'Canada')->first()->id;
    $quocGiaThaiLan = DB::table('quoc_gia')->where('ten_quoc_gia', 'Thái Lan')->first()->id;
    $quocGiaTrungQuoc = DB::table('quoc_gia')->where('ten_quoc_gia', 'Trung Quốc')->first()->id;

    // Chèn phim vào bảng `phim`
    $phim1 = DB::table('phim')->insertGetId([
        'slug' => 'dan-da-dan',
        'ten_phim' => 'DAN DA DAN',
        'thumb' => 'https://phimimg.com/upload/vod/20241005-1/00e8698660b55f756067e5954c39d8d5.jpg',
        'loai_phim' => 1,
        'nam_id' => $N2024,
        'quoc_gia_id' => $quocGiaNhatBan,
        // 'the_loai_id' => $theLoaiHanhDong,
        'dien_vien' => 'Natsuki Hanae, Shion Wakayama, Nana Mizuki...',
        'noi_dung' => 'Cá cược để chứng minh sự tồn tại của ma và người ngoài hành tinh...',
    ]);

    // Chèn thể loại vào bảng trung gian `phim_the_loai`
    DB::table('phim_the_loai')->insert([
        ['phim_id' => $phim1, 'the_loai_id' => $theLoaiHanhDong],
        ['phim_id' => $phim1, 'the_loai_id' => $theLoaiPhieuLuu],
    ]);

    // Phim thứ 2
    $phim2 = DB::table('phim')->insertGetId([
        'slug' => 'cu-lao-xac-song',
        'ten_phim' => 'Cù Lao Xác Sống',
        'thumb' => 'https://phimimg.com/upload/vod/20241121-1/ea578f7b02391a397cf03e8b030453ba.jpg',
        'loai_phim' => 0,
        'nam_id' => $N2022,
        'quoc_gia_id' => $quocGiaVietNam,
        // 'the_loai_id' => $theLoaiChinhKich,
        'dien_vien' => 'Huỳnh Đông, Ốc Thanh Vân, Trần Phong...',
        'noi_dung' => 'Phim nói về hành trình của một nhóm người cùng nhau sinh tồn...',
        'luot_xem' => 100,
    ]);

    // Chèn thể loại vào bảng trung gian `phim_the_loai`
    DB::table('phim_the_loai')->insert([
        ['phim_id' => $phim2, 'the_loai_id' => $theLoaiVienTuong],
        ['phim_id' => $phim2, 'the_loai_id' => $theLoaiChinhKich],
    ]);


    $phim3 = DB::table('phim')->insertGetId([
        'slug'=>'trung-ta',
        'ten_phim'=> 'Trúng Tà',
        'thumb'=> 'https://phimimg.com/upload/vod/20241225-1/2f3845ccbaccbb0d2aff687e3a352fdc.jpg',
        'loai_phim'=> 0,
        'nam_id'=> $N2023,
        'quoc_gia_id'=> $quocGiaTrungQuoc,
        'dien_vien'=> 'Ken Chang Tzu-Yao, Li Qian, Shang Tielong, Han Dong, Wang Chengsi',
        'noi_dung'=> 'Bộ phim diễn ra vào thời kỳ Trung Hoa Dân quốc, kể về Mục Nguyên đang đối diện với cái chết, trong trí óc, anh ta tự tưởng tượng ra một bản thân mới là cảnh sát Triệu Nhân. Khi Triệu Nhân khám phá ra sự thật đằng sau những sự việc chấn động kỳ quái, Mục Nguyên cũng hoàn thành sự cứu rỗi tâm hồn của mình trước khi qua đời. Với các tình tiết căng thẳng, câu chuyện kể về một câu chuyện triết học xoay quanh việc cứu rỗi tâm hồn. Nó nhằm mục đích truyền tải đến khán giả rằng chỉ có dũng cảm đối mặt với những sai lầm, đau khổ trong quá khứ, chúng ta mới có thể thực sự cởi bỏ những nút thắt bên trong, bước ra khỏi sương mù và giành lại cuộc sống mới.',
        'luot_xem'=> 0,
    ]);
    DB::table('phim_the_loai')->insert([
        ['phim_id' => $phim3, 'the_loai_id' => $theLoaiTamLy],
        ['phim_id' => $phim3, 'the_loai_id' => $theLoaiBiAn],
        ['phim_id' => $phim3, 'the_loai_id' => $theLoaiKinhDi],
    ]);


    $phim4 = DB::table('phim')->insertGetId([
        'slug' => 'hoang-ha-thu-mo-nhan',
        'ten_phim' => 'Hoàng Hà Thủ Mộ Nhân',
        'thumb' => 'https://phimimg.com/upload/vod/20241225-1/b9e9a81445796d07cd90a294e29330ea.jpg',
        'loai_phim' => 0,
        'nam_id' => $N2023, // Biến $N2023 cần được khai báo trước với ID của năm 2023.
        'quoc_gia_id' => $quocGiaTrungQuoc, // Biến $quocGiaTrungQuoc cần được khai báo trước với ID của quốc gia Trung Quốc.
        'dien_vien' => 'Zhou Chengao, Liu Meitong, Yuen Cheung-Yan, Zhao Yiji, Dmitriy Shcherbynsky, Cai Qinxin, Liu Chenglong, Wang Kai Jie, Mei Aoxue',
        'noi_dung' => 'Theo truyền thuyết, sau khi Vương Mãng lên ngôi hoàng đế, để đảm bảo quyền lực của hoàng gia có thể truyền từ thế hệ này sang thế hệ khác, đồng thời để ngăn chặn những kẻ dòm ngó kho báu trong lăng mộ của mình, ông đặt mộ của mình trong một quan tài hình con thuyền lớn, sau đó chôn nó dưới lớp cát của dòng sông Hoàng Hà. Ông cũng thành lập bốn giáo phái lớn trên sông Hoàng Hà, bao gồm Đào Sa, Lao Thi, Quy Táng và Thủ Lăng để chôn cất và bảo vệ lăng mộ. Mặc dù họ tổ chức mua bán hàng hóa trên sông nhưng nhiệm vụ hàng đầu của họ vẫn là bảo vệ lăng mộ. Do đó, trong khu vực lưu vực sông Hoàng Hà, có truyền thuyết xa xưa về kho báu bí mật của mắt Long Vương truyền miệng. Trong thời Trung Hoa dân quốc, bốn bang hội hàng hải lớn nhất vùng do nhiều năm tham chiến và tác động của biến cố chính trị đã trở nên bất đồng và không còn tuân theo các quy tắc truyền thống. Ngoài ra, các lãnh đạo thế hệ trước của bốn tổ chức đã già nua. Bốn tổ chức thường xảy ra xung đột lớn với nhau, và tình hình dưới lòng sông Hoàng Hà trở nên hỗn loạn. Vương Ngũ Đẩu, một thành viên của tổ chức Đào Sa, từ nhỏ đã được nhận nuôi bơi thủ lĩnh nhưng do không rõ lai lịch nên anh luôn bị gia tộc coi thường. Vương Ngũ Đẩu tham gia vào một cuộc hành trình tìm kiếm kho báu dưới lòng sông Hoàng Hà, thực ra là để tìm ra danh tính thật của mình. Điều này đánh dấu sự khởi đầu của cuộc hành trình phiêu lưu dưới lòng sông Hoàng Hà.',
        'luot_xem' => 0,
    ]);
    
    // Thêm thể loại liên kết với phim
    DB::table('phim_the_loai')->insert([
        ['phim_id' => $phim4, 'the_loai_id' => $theLoaiHanhDong], // Biến $theLoaiHanhDong cần được khai báo trước với ID của thể loại 'Hành Động'.
        ['phim_id' => $phim4, 'the_loai_id' => $theLoaiKinhDi],   // Biến $theLoaiKinhDi cần được khai báo trước với ID của thể loại 'Kinh Dị'.
 // Biến $theLoaiTrungQuoc cần được khai báo trước với ID của thể loại 'Trung Quốc'.
    ]);
    
    $phim5 = DB::table('phim')->insertGetId([
        'slug' => 'khu-rung-ky-quai',
        'ten_phim' => 'Khu Rừng Kỳ Quái',
        'thumb' => 'https://phimimg.com/upload/vod/20241225-1/6e4f5851677336e2d02155ebbae1c3c2.jpg',
        'loai_phim' => 0,
        'nam_id' => $N2023,
        'quoc_gia_id' => $quocGiaTrungQuoc,
        'dien_vien' => 'Mou Fengbin, Li Xinai, Baode Wang, Wang Hongqian, Mu Lan, Yang Hanbin, Zhou Xiaorui, Li Yalin',
        'noi_dung' => 'Mã Hoành Viễn dẫn mọi người vào khu vực cấm của núi Trường Bạch để tìm tàu hỏa, trên đường đi...',
        'luot_xem' => 0,
    ]);

    // Chèn thể loại vào bảng trung gian `phim_the_loai`
    DB::table('phim_the_loai')->insert([
        ['phim_id' => $phim5, 'the_loai_id' => $theLoaiTamLy],
        ['phim_id' => $phim5, 'the_loai_id' => $theLoaiBiAn],
        ['phim_id' => $phim5, 'the_loai_id' => $theLoaiPhieuLuu],
        ['phim_id' => $phim5, 'the_loai_id' => $theLoaiKinhDi],
    ]);


    $phim6 = DB::table('phim')->insertGetId([
        'slug' => 'moi-tinh-giang-sinh',
        'ten_phim' => 'Mối Tình Giáng Sinh',
        'thumb' => 'https://phimimg.com/upload/vod/20241224-1/170f8a3536d3f133f37c976a0586a808.jpg',
        'loai_phim' => 0,
        'nam_id' => $N2024,
        'quoc_gia_id' => $quocGiaCanada,
        'dien_vien' => 'Hayley Sales, Marshall Williams, Teagan Vincze, Shay Galor, Sarah Angelle, Nik Andrews, Ajay Bharti, Neville Bowman, Rhys Cawley, Tavia Cervi, Tyler Cody, Toni Nielsen',
        'noi_dung' => 'Libby là một thợ làm bánh mới nổi, mở cửa hàng của mình đúng vào mùa Giáng sinh...',
        'luot_xem' => 0,
    ]);
    DB::table('phim_the_loai')->insert([
        ['phim_id' => $phim6, 'the_loai_id' => $theLoaiTinhCam],
        ['phim_id' => $phim6, 'the_loai_id' => $theLoaiTamLy],
        ['phim_id' => $phim6, 'the_loai_id' => $theLoaiGiaDinh],
    ]);


    $phim7 = DB::table('phim')->insertGetId([
        'slug' => 'tro-choi-sinh-ton',
        'ten_phim' => 'Trò Chơi Sinh Tồn',
        'thumb' => 'https://phimimg.com/upload/vod/20231030-1/339f3c6a8caa8f0d906823fc12ca88e8.jpg',
        'loai_phim' => 0,
        'nam_id' => $N2014,
        'quoc_gia_id' => $quocGiaNhatBan,
        'dien_vien' => 'Sota Fukushi, Ryunosuke Kamiki, Hirona Yamazaki, Mio Yuki, Jingi Irie, Shota Sometani, Nao Omori, Nijiro Murakami, Dori Sakurada, Lily Franky, Atsuko Maeda, Ryûhei Ueshima, Ryosuke Yamamoto, Minori Hagiwara, Sasuke Otsuru, Naoto Takahashi, Jimon Terakado',
        'noi_dung' => 'Tại một trường trung học, một giáo viên đang giảng bài bất thình lình bị nổ tung sọ ngay bên bục giảng. Kế sau đó, những vụ nổ xảy ra liên tiếp...',
        'luot_xem' => 0,
    ]);

    // Chèn thể loại vào bảng trung gian `phim_the_loai`
    DB::table('phim_the_loai')->insert([
        ['phim_id' => $phim7, 'the_loai_id' => $theLoaiTamLy],
        ['phim_id' => $phim7, 'the_loai_id' => $theLoaiKinhDi],
        ['phim_id' => $phim7, 'the_loai_id' => $theLoaiHaiHuoc],
    ]);


    $phim8 = DB::table('phim')->insertGetId([
        'slug' => 'anh-hung-thanh-pho',
        'ten_phim' => 'Anh Hùng Thành Phố',
        'thumb' => 'https://phimimg.com/upload/vod/20241220-1/8f8cf5f3e022421589d650278dbed2d6.jpg',
        'loai_phim' => 0,
        'nam_id' => $N2024,
        'quoc_gia_id' => $quocGiaTrungQuoc,
        'dien_vien' => 'Amber Kuo, Liu Xun, Yi Yunhe, Yue Yang, Li Chengru, Cailun Huang, Liu Yan, Kun Liu',
        'noi_dung' => 'Bộ phim kể về ba người là Mã Lực, Hầu Cơ và Dương Tiếu Tiếu làm việc tại cùng một công ty năng lượng tái tạo. Cả ba vì mục đích riêng của mình mà bị cuốn vào cuộc tranh chấp giữa ông chủ Long Bách Xuyên và nhà đầu tư Kim tiên sinh. Mọi người đấu tranh kịch liệt quanh một viên pin siêu mạnh. Cuối cùng, Mã Lực và Dương Tiếu Tiếu trong tình thế nguy cấp đã cứu được Hầu Cơ và tìm lại chính mình.',
        'luot_xem' => 0,
    ]);

    // Chèn thể loại vào bảng trung gian `phim_the_loai`
    DB::table('phim_the_loai')->insert([
        ['phim_id' => $phim8, 'the_loai_id' => $theLoaiHaiHuoc],
        ['phim_id' => $phim8, 'the_loai_id' => $theLoaiChinhKich],
    ]);


    $phim9 = DB::table('phim')->insertGetId([
        'slug' => 'thame-po-nhip-dap-con-tim',
        'ten_phim' => 'Thame Po: Nhịp Đập Con Tim',
        'thumb' => 'https://phimimg.com/upload/vod/20241218-1/e5fe8360714773356421a3050fb763bf.jpg',
        'loai_phim' => 1,
        'nam_id' => $N2024,
        'quoc_gia_id' => $quocGiaThaiLan,
        'dien_vien' => 'William Jakrapatr Kaewpanpong, Supha Sangaworawong, Rapeepong Supatineekitdecha, Pichetpong Chiradatesakunvong, Nut Thanat Danjesda, Tui Chayatorn Trairattanapradit, Yongwaree Anilbol, Samantha Melanie Coates, Rutricha Phapakithi, Leo Saussay, Sattabut La',
        'noi_dung' => 'Tình cảm nảy nở và ranh giới bị xóa nhòa khi chàng trai nọ ghi lại buổi biểu diễn cuối của một nhóm nhạc nam đình đám rồi phát triển mối quan hệ gắn bó với giọng ca chính cô đơn.',
        'luot_xem' => 0,
    ]);

    // Chèn thể loại vào bảng trung gian `phim_the_loai`
    DB::table('phim_the_loai')->insert([
        ['phim_id' => $phim9, 'the_loai_id' => $theLoaiChinhKich],
        ['phim_id' => $phim9, 'the_loai_id' => $theLoaiTinhCam],
        ['phim_id' => $phim9, 'the_loai_id' => $theLoaiTamLy],
    ]);



    $phim10 = DB::table('phim')->insertGetId([
        'slug' => 'tro-choi-con-muc-phan-1',
        'ten_phim' => 'Trò Chơi Con Mực (Phần 1)',
        'thumb' => 'https://phimimg.com/upload/vod/20240425-1/46716dc86af1bee4ba3a9edea6af79cb.jpg',
        'loai_phim' => 1,
        'nam_id' => $N2021,
        'quoc_gia_id' => $quocGiaHanQuoc,
        'dien_vien' => 'Lee Jung Jae, Park Hae Soo, Heo Sung Tae, Wi Ha Joon, Jung Ho Yeon, Im Ki Hong',
        'noi_dung' => 'Trò Chơi Con Mực là câu chuyện về hàng trăm người chơi kẹt tiền chấp nhận một lời mời kỳ lạ: thi đấu trong các trò chơi trẻ con. Đón chờ họ là một giải thưởng hấp dẫn – và những rủi ro chết người.',
        'luot_xem' => 0,
    ]);

    // Chèn thể loại vào bảng trung gian `phim_the_loai`
    DB::table('phim_the_loai')->insert([
        ['phim_id' => $phim10, 'the_loai_id' => $theLoaiHanhDong],
        ['phim_id' => $phim10, 'the_loai_id' => $theLoaiTinhCam],
        ['phim_id' => $phim10, 'the_loai_id' => $theLoaiTamLy],
        ['phim_id' => $phim10, 'the_loai_id' => $theLoaiHinhSu],
        ['phim_id' => $phim10, 'the_loai_id' => $theLoaiChienTranh],
    ]);


    $phim11 = DB::table('phim')->insertGetId([
        'slug' => 'tro-choi-con-muc-phan-2',
        'ten_phim' => 'Trò Chơi Con Mực (Phần 2)',
        'thumb' => 'https://phimimg.com/upload/vod/20241222-1/7f75c16e63ade7d45ad56f2f3e7a0453.jpg',
        'loai_phim' => 1,
        'nam_id' => $N2024,
        'quoc_gia_id' => $quocGiaHanQuoc,
        'dien_vien' => 'Lee Jung-jae, Lee Byung-hun, Wi Ha-jun, Yang Dong-geun, Kang Ha-neul, Jo Yu-ri, Lee Jin-uk, Yim Si-wan, Kang Ae-sim, Lee Seo-hwan, Park Sung-hoon, Park Gyu-young, Chae Kook-hee, Lee David, Choi Seung-hyun, Roh Jae-won, Won Ji-an',
        'noi_dung' => 'Hàng trăm người chơi kẹt tiền chấp nhận một lời mời kỳ lạ: thi đấu trong các trò chơi trẻ con. Đón chờ họ là một giải thưởng hấp dẫn – và những rủi ro chết người.',
        'luot_xem' => 0,
    ]);

    DB::table('phim_the_loai')->insert([
        ['phim_id' => $phim11, 'the_loai_id' => $theLoaiHanhDong],
        ['phim_id' => $phim11, 'the_loai_id' => $theLoaiPhieuLuu],
        ['phim_id' => $phim11, 'the_loai_id' => $theLoaiBiAn],
        ['phim_id' => $phim11, 'the_loai_id' => $theLoaiChinhKich],
    ]);

}
}