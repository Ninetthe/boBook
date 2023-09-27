<?php

use App\Http\Controllers\AuthController;
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

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::get('userprofile', [AuthController::class, 'userprofile']);
    Route::post('logout', [AuthController::class, 'logout']);
});


Route::group(['prefix' => 'users'], function () {
    Route::get('/', 'App\Http\Controllers\UserController@index');
    Route::post('/', 'App\Http\Controllers\UserController@store');
    Route::get('/{user}', 'App\Http\Controllers\UserController@show');
    Route::put('/{user}', 'App\Http\Controllers\UserController@update');
    Route::delete('/{user}', 'App\Http\Controllers\UserController@destroy');
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

