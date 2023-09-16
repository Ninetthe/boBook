<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $status = Status::all();
        //convertir a json para la api
        return response()->json($status);
    }

    /**
     * Store a newly created resource in storage.
     */
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

    /**
     * Display the specified resource.
     */
    public function show(Status $status)
    {
    
        return response()->json($status);
    }

    /**
     * Update the specified resource in storage.
     */
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

    /**
     * Remove the specified resource from storage.
     */
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
