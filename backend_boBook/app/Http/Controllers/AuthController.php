<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\Common\Lexer\Token;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function register(Request $request){
      $request->validate([
        'name' => 'required',
        'lastname' => 'required',
        'email' => 'required|email|unique:users',
        'password' => 'required',
        'phone' => 'nullable',
        'picture' => 'nullable'
      ]);
      $user = new User();
      $user->name = $request->name;
      $user->lastname = $request->lastname;
      $user->email = $request->email;
      $user->password = Hash::make($request->password);
      $user->phone = $request->phone;
      $user->picture = $request->picture;
      $user->save();
      return response($user, Response::HTTP_CREATED);
    }

    public function login(Request $request){
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('token')->plainTextToken;
            $cookie = cookie('cookie_token', $token, 60 * 24);
            return response(["token"=>$token], Response::HTTP_OK)->withoutCookie($cookie);
        } else{
            return response(["message"=>"Invalid credentials"], Response::HTTP_UNAUTHORIZED);
        }
    }

    public function userProfile(Request $request){
        return response()->json([
            "message" => "Method USERPROFILE OK",
            "userData" => auth()->user()

        ], Response::HTTP_OK);
        
    }
    public function logout(){
    $cookie = Cookie::forget('cookie_token');
    return response(["message"=>"Logout ok"], Response::HTTP_OK)->withCookie($cookie);

        
    }
}
