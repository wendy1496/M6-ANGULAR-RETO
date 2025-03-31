import { Component, OnInit } from '@angular/core';
import { State } from '../state/state';
import { CheckBalanceService } from 'src/app/services/check-balance.service';
import { Isaldo } from 'src/app/interfaces/saldo.interface';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  saldoCuenta: number = 0;
  usuario: string | null = ''; 
  user: string | null = 'Wendy'; 

  constructor(private state: State, private checkBalanceService: CheckBalanceService) {} 

  ngOnInit() {
    this.state.user$.subscribe(user => {
      this.usuario = user; 
      if (this.usuario) {
        this.obtenerSaldo(this.usuario);
      }
    });
  }

  obtenerSaldo(numeroCuenta: string): void {
    this.checkBalanceService.getSaldo(numeroCuenta).subscribe({
      next: (data: Isaldo) => {
        this.saldoCuenta = data.saldo;
      },
      error: (err) => {
        console.error('Error al obtener saldo:', err);
      }
    });
  }
}
