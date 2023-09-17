<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index():JsonResponse
    {
        return response()->json(User::all(), 200);
    }

    public function store(Request $request)
    {
        $user = new User;
        $user->name = $request->name;
        $user->lastname = $request->lastname;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->phone = $request->phone;
        $user->picture = $request->picture;
        $user->save();
        $data = [
            'message' => 'Client created successfully',
            'user' => $user
        ];
        return response()->json($data);
    }

    public function show(User $user)
    {
        return response()->json($user);
    }

    public function update(Request $request, User $user)
    {
        $user->name = $request->name;
        $user->lastname = $request->lastname;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->phone = $request->phone;
        $user->picture = $request->picture;
        $user->save();
        $data = [
            'message' => 'User updated successfully',
            'user' => $user
        ];
        return response()->json($data);
    }

    public function destroy(User $user)
    {
        $user->delete();
        $data = [
            'message' => 'User deleted successfully',
            'user' => $user
        ];
        
        return response()->json($data);
    }

}
