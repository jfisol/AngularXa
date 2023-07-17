import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Producto } from '../interfaz/datos';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  @ViewChild('btn',{static: true}) templateBtn?:TemplateRef<any>;
  @ViewChild('myTemplate',{static: true}) template?:TemplateRef<any>;
  @ViewChild(TemplateRef,{static: true, read: ViewContainerRef}) container?: ViewContainerRef;
  @Input() producto: Producto[];
  @Output() eventListado: EventEmitter<boolean>;
  vistaListado = false;
  stringlistado= 'Mostrar Listado';
  constructor(){
    this.producto=[];
    this.eventListado = new EventEmitter();
   
  }


ngOnInit(): void {
  //console.log("dd",this.template);
  this.container?.createEmbeddedView(this.templateBtn!);
  this.container?.createEmbeddedView(this.template!);

}


btnListado(){
  this.vistaListado= !this.vistaListado;

  if(this.vistaListado){
    this.stringlistado='Ocultar Listado'
  }
  else{
    this.stringlistado='Mostrar Listado';
  }

}
}
