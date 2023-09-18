<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Booklist extends Model
{
    use HasFactory;

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'book_booklist_status_user', 'booklist_id', 'user_id')
            ->withPivot('status_id', 'book_id');
    }

    public function books(): BelongsToMany
    {
        return $this->belongsToMany(Book::class, 'book_booklist_status_user', 'booklist_id', 'book_id')
            ->withPivot('status_id', 'user_id');
    }

    public function statuses(): BelongsTo
    {
        return $this->belongsTo(Status::class);
    }
}
