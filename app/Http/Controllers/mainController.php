<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class mainController extends Controller
{
	public function index() 
	{
		$data = [
			'title' => 'Obaters',
		];

		return view('pages.main', $data);
	}
}
