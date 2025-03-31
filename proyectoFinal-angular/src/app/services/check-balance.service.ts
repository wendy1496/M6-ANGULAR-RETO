import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Isaldo } from '../interfaces/saldo.interface';

@Injectable({
  providedIn: 'root'
})
export class CheckBalanceService {
  private apiUrl = 'http://localhost:8080/cuenta';

  constructor(private http: HttpClient) {}
  
    getSaldo(numeroCuenta: string): Observable<Isaldo> {
      return this.http.get<Isaldo>(`${this.apiUrl}/${numeroCuenta}/saldo`);
    }
  
}
