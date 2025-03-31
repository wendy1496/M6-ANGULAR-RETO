import { Component, OnInit } from '@angular/core';
import { IHistory } from 'src/app/interfaces/history.interface';
import { HistoryService } from 'src/app/services/history.service';
import { State } from '../state/state';

@Component({
  selector: 'app-transactional',
  templateUrl: './transactional.component.html',
  styleUrls: ['./transactional.component.css']
})
export class TransactionalComponent implements OnInit{
  usuario: string | null = '';
  historial: IHistory[] = [];

  constructor(private state: State, private historialService: HistoryService) {}

  ngOnInit() {
    this.state.user$.subscribe(user => {
      this.usuario = user; 
      if (this.usuario) {
        this.obtenerHistorial(this.usuario);
      }
    });
  }

obtenerHistorial(numeroCuenta: string): void {
  this.historialService.getHistorial(numeroCuenta).subscribe({
    next: (data) => {
      this.historial = data;
    },
    error: (err) => {
      console.error('Error al obtener historial:', err);
    }
  });
  }
}
