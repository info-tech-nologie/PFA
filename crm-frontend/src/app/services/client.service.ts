import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Client } from '../models/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:8000/api/clients'; // Remplacez par l'URL de votre API Laravel

  constructor(private http: HttpClient) {}

  // Créer un nouveau client
  createClient(clientData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, clientData);
  }

  // Récupérer tous les clients
  getClients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Récupérer un client par son ID
  getClientById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Mettre à jour un client
  updateClient(id: number, clientData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, clientData);
  }

  // Supprimer un client
  deleteClient(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
