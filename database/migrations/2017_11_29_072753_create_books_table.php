<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 100);
            $table->text('description');
            $table->text('details');
            $table->decimal('price',8,2);
            $table->decimal('discount', 8,2);
            $table->enum('active', ['yes', 'no']);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->dropColumn('deleted_at');
        });
        Schema::dropIfExists('books');
    }
}
