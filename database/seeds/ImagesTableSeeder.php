<?php

use Illuminate\Database\Seeder;

class ImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('images')->truncate();
        $images = [
            [
                'file' => 'http://forcakes.kz/image/cache/catalog/i/dd/je/804f8b251b4e8d5cde5321fc0064d515-200x250.jpg',
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ],
            [
                'file' => 'http://forcakes.kz/image/cache/catalog/i/gm/ll/977fede6645d6f7f7fe806267f1800fa-200x250.jpg',
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ],
            [
                'file' => 'http://forcakes.kz/image/cache/catalog/i/hj/mf/f110e6fbb6ab8ea62207df1ff74954ca-200x250.jpg',
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ],
            [
                'file' => 'http://forcakes.kz/image/cache/catalog/i/gl/hl/9a609134476012664c081e2bf584ed97-200x250.jpg',
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ]

        ];
        DB::table('images')->insert($images);
    }
}
