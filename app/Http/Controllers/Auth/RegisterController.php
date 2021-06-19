<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request){

//        $params = $request->all()['data'];
//        $params = (object)$params;
//
//        $user = new User;
//        $user->name = $params->name;
//        $user->email = mb_strtolower($params->email);
//        $user->password = $params->password;
//        $user->save();
//
//        return response()->json(
//            [
//                'success' => true,
//                'message' => 'Registration is completed',
//                'request' => $request->all()
//            ]
//        );

        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:4', 'same:password_confirmation']
        ]);



        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return response()->json(['msg' => 'successfully registred']);
    }
}
