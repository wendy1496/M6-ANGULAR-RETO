import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionsService } from 'src/app/services/transactions.service';
import { State } from '../state/state';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  transaccionForm!: FormGroup;
  numeroCuenta: string | null = '';

  constructor(
    private fb: FormBuilder, 
    private transactionService: TransactionsService,
    private state: State
  ) {}

  ngOnInit(): void {
    this.transaccionForm = this.fb.group({
      numeroCuenta: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(1)]],
      tipo: ['deposito', Validators.required]
    });

    this.state.user$.subscribe(user => {
      this.numeroCuenta = user;
      if (this.numeroCuenta) {
        this.transaccionForm.patchValue({ numeroCuenta: this.numeroCuenta });
      }
    });
  }


  enviarTransaccion() {
    if (this.transaccionForm.valid) {
      const tipoTransaccion = this.transaccionForm.value.tipo;
      const transaccion = {
        numeroCuenta: this.transaccionForm.value.numeroCuenta,
        monto: this.transaccionForm.value.monto
      };

      if (tipoTransaccion === 'deposito') {
        this.transactionService.depositar(transaccion).subscribe(response => {
          console.log('Depósito exitoso:', response);
          alert(response);
          this.transaccionForm.patchValue({ monto: null });
        }, error => {
          console.error('Error en el depósito:', error);
          alert(error);
          this.transaccionForm.patchValue({ monto: null });
        });
      } else if (tipoTransaccion === 'retiro') {
        this.transactionService.retirar(transaccion).subscribe(response => {
          console.log('Retiro exitoso:', response);
          alert(response);
        }, error => {
          console.error('Error en el retiro:', error);
          alert(error);
        });
      } else {
        console.error('Tipo de transacción no válido:', tipoTransaccion);
      }
    }
  }
}