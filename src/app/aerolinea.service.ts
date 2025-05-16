import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AerolineaService {

  private baseUrl = 'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/main/flights';

  constructor(private http: HttpClient) {}

  getAllAirlines(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}.json`);
  }

  /**
   * Obtener una aerolínea específica (incluyendo sus vuelos) por su ID.
   * @param id ID de la aerolínea
   */
  getAirlineById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}.json`);
  }
}

