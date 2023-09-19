<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        $book = Book::all();
        return response()->json($book);
    }

    public function store(Request $request)
    {
        // $date = Carbon::now();
        // $date = $date->format('d-m-Y');
        $book = new Book;
        $book->title = $request->title;
        $book->authors = $request->authors;
        $book->publisher = $request->publisher;
        $book->published_date = $request->published_date;
        $book->description = $request->description;
        $book->pages = $request->pages;
        $book->categories = $request->categories;
        $book->picture = $request->picture;
        $book->save();
        $data = [
            'message' => 'Created book successfully',
            'book' => $book
        ];
        return response()->json($data);
    }
    
    public function show(Book $book)
    {
        return response()->json($book);
    }

    public function update(Request $request, Book $book)
    {
        $book->title = $request->title;
        $book->authors = $request->authors;
        $book->publisher = $request->publisher;
        $book->published_date = $request->published_date;
        $book->description = $request->description;
        $book->pages = $request->pages;
        $book->categories = $request->categories;
        $book->picture = $request->picture;
        $book->save();
        $data = [
            'message'=> 'Book Updated successfully',
            'book'=> $book
        ];
        return response()->json($data);
    }

    public function destroy(Book $book)
    {
        $book->delete();
        $data = [
            'message' => 'Book deleted successfully',
            'book' => $book
        ];
        return response()->json($data);
    }
}
