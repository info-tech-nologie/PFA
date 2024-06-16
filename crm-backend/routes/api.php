<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
use App\Http\Controllers\CompanyController;

// Routes pour les entreprises (companies)
Route::get('/companies', [CompanyController::class, 'index']); // Récupérer toutes les entreprises
Route::get('/companies/{id}', [CompanyController::class, 'show']); // Récupérer une entreprise par son ID
Route::post('/companies', [CompanyController::class, 'store']); // Créer une nouvelle entreprise
Route::put('/companies/{id}', [CompanyController::class, 'update']); // Mettre à jour une entreprise
Route::delete('/companies/{id}', [CompanyController::class, 'destroy']); // Supprimer une entreprise

use App\Http\Controllers\UserController;

Route::get('/users', [UserController::class, 'index']); // Récupérer tous les utilisateurs
Route::get('/users/{id}', [UserController::class, 'show']); // Récupérer un utilisateur par son ID
Route::post('/users', [UserController::class, 'store']); // Créer un nouvel utilisateur
Route::put('/users/{id}', [UserController::class, 'update']); // Mettre à jour un utilisateur
Route::delete('/users/{id}', [UserController::class, 'destroy']); // Supprimer un utilisateur

use App\Http\Controllers\ClientController;

Route::get('/clients', [ClientController::class, 'index']); // Récupérer tous les clients
Route::get('/clients/{id}', [ClientController::class, 'show']); // Récupérer un client par son ID
Route::post('/clients', [ClientController::class, 'store']); // Créer un nouveau client
Route::put('/clients/{id}', [ClientController::class, 'update']); // Mettre à jour un client
Route::delete('/clients/{id}', [ClientController::class, 'destroy']); // Supprimer un client


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
