<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Booklist extends Model
{
    use HasFactory;
    public function clients(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }
    public function books(): BelongsToMany
    {
        return $this->belongsToMany(Book::class);
    }
}
