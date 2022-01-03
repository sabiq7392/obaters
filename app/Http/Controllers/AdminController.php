<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
	public function index()
	{
		$response = [
			'title' => 'Dashboard'
		];

		return view('admin.index', $response);
	}
}
