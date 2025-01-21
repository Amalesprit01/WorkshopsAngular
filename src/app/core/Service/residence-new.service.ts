import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenceNewService {

  private apiUrl = 'http://localhost:3000/residences'; // URL de l'API

  constructor(private http: HttpClient) {}

  // 1. Obtenir toutes les résidences
  getResidences(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // 2. Obtenir une résidence par ID
  getResidenceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // 3. Ajouter une nouvelle résidence
  addResidence(residence: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, residence);
  }

  // 4. Mettre à jour une résidence existante
  updateResidence(id: number, residence: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, residence);
  }

  // 5. Supprimer une résidence
  deleteResidence(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
