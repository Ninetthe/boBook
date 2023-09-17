<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Book extends Model
{
    use HasFactory;
    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function booklists(): BelongsToMany
    {
        return $this->belongsToMany(Booklist::class);
    }
    public function statuses(): BelongsToMany
    {
        return $this->belongsToMany(Status::class);
    }
}
