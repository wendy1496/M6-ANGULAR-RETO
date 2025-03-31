import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems: string[] = ['Personas', 'Negocios', 'Corporativos'];
  bottomMenuItems: string[] = ['Inicio', 'Necesidades', 'Productos y Servicios', 'Educación Financiera'];
}
