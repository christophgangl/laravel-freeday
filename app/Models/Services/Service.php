<?php

namespace App\Models\Services;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $table = 'services';
    protected $primaryKey = 'service_id';

    protected $fillable = [
        'user_id',
        'title',
        'description',
        'hourly_cost',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
