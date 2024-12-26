<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('phim', function (Blueprint $table) {
            $table->increments('id');
            $table->string('slug')->unique();
            $table->string('ten_phim');
            $table->string('thumb');
            $table->boolean('loai_phim')->default(0);
            $table->unsignedInteger('nam_id');
            $table->unsignedInteger('quoc_gia_id');
            // $table->unsignedInteger('the_loai_id');
            $table->string('dien_vien');
            // $table->integer('thoi_luong');
            $table->text('noi_dung');
            $table->integer('luot_xem')->default(0);
            $table->timestamps();
            // // khoa ngoai
            $table->foreign('nam_id')->references('id')->on('nam')->onDelete('cascade');
            $table->foreign('quoc_gia_id')->references('id')->on('quoc_gia')->onDelete('cascade');
            // $table->foreign('the_loai_id')->references('id')->on('the_loai')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('phim');
    }
};
