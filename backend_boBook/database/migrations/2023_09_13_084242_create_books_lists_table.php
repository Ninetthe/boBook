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
        Schema::create('books_lists', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('id_user');
            $table->unsignedBigInteger('id_book');
            $table->unsignedBigInteger('id_note');
            $table->integer('rating')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books_lists');
    }
};
