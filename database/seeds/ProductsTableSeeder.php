<?php

use Illuminate\Database\Seeder;
use App\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->truncate();
        $products = [
            [
                'product' => 'Product1',
                'description' => 'Description1',
                'details' => 'details1',
                'price' => '100',
                'active' => 'yes',
                'id_img' => 1,
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ],
            [
                'product' => 'Product2',
                'description' => 'Description2',
                'details' => 'details2',
                'price' => '110',
                'active' => 'yes',
                'id_img' => 2,
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ],
            [
                'product' => 'Product3',
                'description' => 'Description3',
                'details' => 'details3',
                'price' => '120',
                'active' => 'yes',
                'id_img' => 3,
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ],
            [
                'product' => 'Product4',
                'description' => 'Description4',
                'details' => 'details4',
                'price' => '130',
                'active' => 'yes',
                'id_img' => 4,
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ]

        ];
        DB::table('products')->insert($products);
        //Product::created($products);

    }
}
