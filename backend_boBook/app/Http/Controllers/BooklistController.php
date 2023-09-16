<?php

namespace App\Http\Controllers;

use App\Models\Booklist;
use Illuminate\Http\Request;

class BooklistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $booklist = Booklist::width('user')->get();
        return response()->json($booklist);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $booklist = new Booklist;
        $booklist->list_name = $request->list_name;
        $booklist->client_id = $request->client_id;
        $booklist->save();
        $data = [
            'message' => 'Booklist created successfully',
            'booklist' => $booklist
        ];
        
        return response()->json($data);

    }

    /**
     * Display the specified resource.
     */
    public function show(Booklist $booklist)
    {
        return response()->json($booklist);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Booklist $booklist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Booklist $booklist)
    {
        $booklist->list_name = $request->list_name;
        $booklist->client_id = $request->client_id;
        $booklist->save();
        $data = [
            'message' => 'Booklist updated successfully',
            'booklist' => $booklist
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booklist $booklist)
    {
        $booklist->delete();
        $data = [
            'message' => 'Booklist deleted successfully',
            'booklist' => $booklist
        ];

        return response()->json($data);
    }
}
