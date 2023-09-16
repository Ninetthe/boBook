<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix' => 'clients'], function () {
Route::get('/', 'App\Http\Controllers\ClientController@index');
Route::post('/', 'App\Http\Controllers\ClientController@store');
Route::get('/{client}', 'App\Http\Controllers\ClientController@show');
Route::put('/{client}', 'App\Http\Controllers\ClientController@update');
Route::delete('/{client}', 'App\Http\Controllers\ClientController@destroy');
});
Route::group(['prefix' => 'books'], function () {
    Route::get('/', 'App\Http\Controllers\BookController@index');
    Route::post('/', 'App\Http\Controllers\BookController@store');
    Route::get('/{book}', 'App\Http\Controllers\BookController@show');
    Route::put('/{book}', 'App\Http\Controllers\BookController@update');
    Route::delete('/{book}', 'App\Http\Controllers\BookController@destroy');
});
Route::group(['prefix' => 'booklists'], function () {
    Route::get('/', 'App\Http\Controllers\BooklistController@index');
    Route::post('/', 'App\Http\Controllers\BooklistController@store');
    Route::get('/{booklist}', 'App\Http\Controllers\BooklistController@show');
    Route::put('/{booklist}', 'App\Http\Controllers\BooklistController@update');
    Route::delete('/{booklist}', 'App\Http\Controllers\BooklistController@destroy');
});
Route::group(['prefix' => 'statuses'], function () {
    Route::get('/', 'App\Http\Controllers\StatusController@index');
    Route::post('/', 'App\Http\Controllers\StatusController@store');
    Route::get('/{status}', 'App\Http\Controllers\StatusController@show');
    Route::put('/{status}', 'App\Http\Controllers\StatusController@update');
    Route::delete('/{status}', 'App\Http\Controllers\StatusController@destroy');
});
