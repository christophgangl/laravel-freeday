<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function process_signup(Request $request){
        dd($request);

        $user = new User;
        $user->name = $request->name;
        $user->email = mb_strtolower($request->email);
        $user->password = $request->password;
        $user->save();

        return response()->json(
            [
                'success' => true,
                'message' => 'Registration is completed'
            ]
        );
    }


}
