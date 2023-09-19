<?php

namespace App\Http\Controllers;

use App\Models\Booklist;
use Illuminate\Http\Request;

class BooklistController extends Controller
{
    public function index()
    {
        $booklist = Booklist::with('books.statuses')->get();
        return response()->json($booklist);
    }

    public function store(Request $request)
    {
        $booklist = new Booklist;
        $booklist->list_name = $request->list_name;
        $booklist->user_id = $request->user_id;
        $booklist->save();
        $data = [
            'message' => 'Booklist created successfully',
            'booklist' => $booklist
        ];
        
        return response()->json($data);

    }
    public function show(Booklist $booklist)
    {
        $booklist->load(['books.statuses']);
        return response()->json($booklist);
    }

    public function update(Request $request, Booklist $booklist)
    {
        $booklist->list_name = $request->list_name;
        $booklist->user_id = $request->user_id;
        $booklist->save();
        $data = [
            'message' => 'Booklist updated successfully',
            'booklist' => $booklist
        ];

        return response()->json($data);
    }
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
