import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalUploadService {

  public tipo:string;
  public id: string;

  public oculto: string = 'oculto';

  public notification = new EventEmitter<any>();

  constructor() { }

  ocultarModal(){
    this.tipo = null;
    this.id = null;
    this.oculto = 'oculto';

  }

  mostrarModal(tipo: string, id: string){
    this.tipo = tipo;
    this.id = id;
    this.oculto= '';
  }
}
