<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;

class StatusController extends Controller
{

    public function index()
    {
        $status = Status::all();
        return response()->json($status);
    }
    public function store(Request $request)
    {
        $status = new Status;
        $status->status_name = $request->status_name;
        $status->save();
        $data = [
            'message' => 'Status created successfully',
            'status' => $status
        ];
        return response()->json($data);
    }
    public function show(Status $status)
    {
    
        return response()->json($status);
    }

    public function update(Request $request, Status $status)
    {
        $status->status_name = $request->status_name;
        $status->save();
        $data = [
            'message' => 'Status updated successfully',
            'status' => $status
        ];
        return response()->json($data);
    }

    public function destroy(Status $status)
    {
        $status->delete();
        $data = [
            'message' => 'Status deleted successfully',
            'Status' => $status
        ];
        
        return response()->json($data);
    }
}
