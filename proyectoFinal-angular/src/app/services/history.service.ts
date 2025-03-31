import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHistory } from '../interfaces/history.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private apiUrl = 'http://localhost:8080/transaccion'; 

  constructor(private http: HttpClient) { }

  getHistorial(numeroCuenta: string): Observable<IHistory[]> {
    return this.http.get<IHistory[]>(`${this.apiUrl}/${numeroCuenta}`);
  }
}
