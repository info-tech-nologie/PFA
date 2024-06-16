<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $table = 'adsl_convention_particulier';

    protected $fillable = [
        'NumContrat', 'Client', 'Debit', 'NumSerieModem', 'IpAdresse', 'Contact', 'Login', 'WifiPassword', 'RouterPassword', 'MAC', 'DateMESTT', 'TypeConvention', 'MAIL'
    ];
 
  
}
