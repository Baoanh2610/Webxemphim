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
        Schema::create('chi_tiet_phim', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('phim_id');
            $table->string('so_tap');
            $table->string('ten_tap');
            $table->string('link_tap');
            $table->string('thoi_luong');
            $table->timestamps();

            $table->foreign('phim_id')->references('id')->on('phim')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chi_tiet_phim');
    }
};
