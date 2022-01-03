<?php

namespace App\Http\Controllers;

use App\Models\Trending;

class MainController extends Controller
{
	public function index() 
	{
		$response = [
			'title' => 'Obaters',
			'trendings' => Trending::All(),
			'products' => [
				[
					'title' => 'Multivitamin', 
					'image' => 'https://images.pexels.com/photos/4047000/pexels-photo-4047000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
				],
				[
					'title' => 'Obat Herbal',
					'image' => 'https://images.pexels.com/photos/7526030/pexels-photo-7526030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
				],
			],
		];

		return view('main.index', $response);
	}
}
