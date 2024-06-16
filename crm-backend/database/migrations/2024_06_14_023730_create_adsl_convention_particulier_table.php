<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdslConventionParticulierTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adsl_convention_particulier', function (Blueprint $table) {
            $table->id();
            $table->string('NumContrat');
            $table->string('Client');
            $table->string('Debit');
            $table->string('NumSerieModem');
            $table->string('IpAdresse');
            $table->string('Contact');
            $table->string('Login');
            $table->string('WifiPassword');
            $table->string('RouterPassword');
            $table->string('MAC');
            $table->date('DateMESTT');
            $table->string('TypeConvention');
            $table->string('MAIL');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('adsl_convention_particulier');
    }
}
