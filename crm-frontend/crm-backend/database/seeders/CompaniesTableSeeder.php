<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use App\Models\Company; 

class CompaniesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Company::updateOrCreate(
            ['email' => 'info@x-internet.tn'], // Clé de recherche
            [
                'name' => 'X-Internet',
                'website' => 'https://www.x-internet.tn',
                'logo_path' => 'path/to/x-internet-logo.png',
            ]
        );
        Company::factory()->count(10)->create();
    }
}
