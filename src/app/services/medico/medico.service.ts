import { Injectable } from '@angular/core';
import { SERVER_URL } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { map } from 'rxjs/operators';
import { Medico } from '../../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {


  totalMedicos: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) { }


  cargarMedicos() {
    let url = SERVER_URL + '/medico';
    return this.http.get(url).pipe(
      map((resp: any) => {
        this.totalMedicos = resp.total;
        return resp.medicos;
      })
    )
  }

  obtenerMedico(id: string) {
    let url = SERVER_URL + '/medico/' + id;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.medico;
      })
    )
  }

  borrarMedico(id: string) {
    let url = SERVER_URL + '/medico/' + id;
    url += '?token=' + this._usuarioService.token;
    return this.http.delete(url).pipe(
      map((resp: any) => {
        swal('Medico Borrado', 'Eliminado correctamente', 'success');
      })
    )
  }

  guardarMedico(medico: Medico) {
    let url = SERVER_URL + '/medico';


    if (medico._id && medico._id != '') {
      //actualizando
      url += '/' + medico._id;
      url += '?token=' + this._usuarioService.token;
      return this.http.put(url, medico).pipe(
        map((resp: any) => {
          swal('Hospital Actualizado', medico.nombre, 'success');
          return resp.medico;
        })
      )
    }
    else {
      //Creando
      url += '?token=' + this._usuarioService.token;
      return this.http.post(url, medico).pipe(
        map((resp: any) => {

          swal('Medico Creado', medico.nombre, 'success');
          return resp.medico;
        }));
    }

  }

  buscarMedicos(termino: string) {
    let url = SERVER_URL + "/busqueda/coleccion/medicos/" + termino;

    return this.http.get(url).pipe(
      map((resp: any) => resp.medicos)
    );
  }

  actualizartMedico(medico: Medico) {
    let url = SERVER_URL + '/medico/' + medico._id;
    url += '?token=' + this._usuarioService.token;
    return this.http.put(url, medico).pipe(
      map((resp: any) => {
        swal('Hospital Actualizado', medico.nombre, 'success');
        return resp.medico;
      })
    )
  }
}
