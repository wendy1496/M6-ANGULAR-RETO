import { Injectable } from '@angular/core';
import { ITransaction } from '../interfaces/transaction.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private apiUrl = 'http://localhost:8080/transaccion';

  constructor(private http: HttpClient) {}

  depositar(transaccion: ITransaction): Observable<any> {
    return this.http.post(`${this.apiUrl}/depositar`, transaccion, { responseType: 'text' });
  }

  retirar(transaccion: ITransaction): Observable<any> {
    return this.http.post(`${this.apiUrl}/retirar`, transaccion, { responseType: 'text' });
  }
}
