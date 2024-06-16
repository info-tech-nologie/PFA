<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    /*
    * Display a listing of the clients.
    *
    * @return \Illuminate\Http\Response
    */
   public function index()
   {
       $clients = Client::all();
       return response()->json($clients);
   }

   /**
    * Store a newly created client in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
   public function store(Request $request)
   {
       $request->validate([
           'NumContrat' => 'required|string',
           'Client' => 'required|string',
           'Debit' => 'required|string',
           'NumSerieModem' => 'required|string',
           'IpAdresse' => 'required|string',
           'Contact' => 'required|string',
           'Login' => 'required|string',
           'WifiPassword' => 'required|string',
           'RouterPassword' => 'required|string',
           'MAC' => 'required|string',
           'DateMESTT' => 'required|date',
           'TypeConvention' => 'required|string',
           'MAIL' => 'required|string|email',
       ]);

       $client = Client::create($request->all());
       return response()->json($client, 201);
   }

   /**
    * Display the specified client.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
   public function show($id)
   {
       $client = Client::findOrFail($id);
       return response()->json($client);
   }

   /**
    * Update the specified client in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
   public function update(Request $request, $id)
   {
       $request->validate([
           'NumContrat' => 'required|string',
           'Client' => 'required|string',
           'Debit' => 'required|string',
           'NumSerieModem' => 'required|string',
           'IpAdresse' => 'required|string',
           'Contact' => 'required|string',
           'Login' => 'required|string',
           'WifiPassword' => 'required|string',
           'RouterPassword' => 'required|string',
           'MAC' => 'required|string',
           'DateMESTT' => 'required|date',
           'TypeConvention' => 'required|string',
           'MAIL' => 'required|string|email',
       ]);

       $client = Client::findOrFail($id);
       $client->update($request->all());

       return response()->json($client, 200);
   }

   /**
    * Remove the specified client from storage.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
   public function destroy($id)
   {
       $client = Client::findOrFail($id);
       $client->delete();

       return response()->json(null, 204);
   }   
}
