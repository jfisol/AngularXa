import { Component } from '@angular/core';
import { Producto } from './interfaz/datos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticaAngular';
  
  lprocucto : Producto[];
  constructor(){
    this.lprocucto =[
      {nombres:'Laptop Acer',costos:3500},
      {nombres:'Laptop Dell',costos:6500},
      {nombres:'todo en uno Acer',costos:3500},
      {nombres:'todo en uno Dell',costos: 4500},
      {nombres:'Camaras de Seguridad', costos: 1500},
      {nombres:'monitor upt', costos: 1500},
      {nombres:'teclado ',costos: 1200},
      {nombres: 'Adaptadores',costos:680},
      {nombres:'Cargadores',costos: 650}
    ]
  }
}
