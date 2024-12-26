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
        Schema::create('phim_the_loai', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('phim_id');
            $table->unsignedInteger('the_loai_id'); // Khóa ngoại đến bảng `the_loai`
            $table->timestamps();

            $table->foreign('phim_id')->references('id')->on('phim')->onDelete('cascade');
            $table->foreign('the_loai_id')->references('id')->on('the_loai')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('phim_the_loai');
    }
};
