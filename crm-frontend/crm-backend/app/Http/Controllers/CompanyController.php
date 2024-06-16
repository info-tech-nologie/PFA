<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends Controller
{
    //
    public function index()
    {
        return Company::all(); // Récupère toutes les entreprises
    }

    public function show($id)
    {
        return Company::findOrFail($id); // Récupère une entreprise par son ID
    }

    public function store(Request $request)
    {
        $company = Company::create($request->all()); // Crée une nouvelle entreprise
        return response()->json($company, 201);
    }

    public function update(Request $request, $id)
    {
        $company = Company::findOrFail($id);
        $company->update($request->all()); // Met à jour une entreprise
        return response()->json($company, 200);
    }

    public function destroy($id)
    {
        $company = Company::findOrFail($id);
        $company->delete(); // Supprime une entreprise
        return response()->json(null, 204);
    }
}
