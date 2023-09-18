<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->title(),
            'authors' => fake()->name(),
            'publisher' => fake()->company(),
            'published_date' => fake()->date(),
            'description' => fake()->paragraph(),
            'pages' => fake()->randomNumber(),
            'categories' => fake()->title(),
            'picture' => fake()->text()
        ];
    }
}