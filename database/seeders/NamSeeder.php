<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class NamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('nam')->insert([
            ['nam_phat_hanh'=> 2024 ],
            ['nam_phat_hanh'=> 2023 ],
            ['nam_phat_hanh'=> 2022 ],
            ['nam_phat_hanh'=> 2021 ],
            ['nam_phat_hanh'=> 2020 ],
            ['nam_phat_hanh'=> 2019 ],
            ['nam_phat_hanh'=> 2018 ],
            ['nam_phat_hanh'=> 2017 ],
            ['nam_phat_hanh'=> 2016 ],
            ['nam_phat_hanh'=> 2015 ],
            ['nam_phat_hanh'=> 2014 ],
            ['nam_phat_hanh'=> 2013 ],
            ['nam_phat_hanh'=> 2012 ],
            ['nam_phat_hanh'=> 2011 ],
            ['nam_phat_hanh'=> 2010 ],
            ['nam_phat_hanh'=> 2009 ],

        ]);

    }
}
