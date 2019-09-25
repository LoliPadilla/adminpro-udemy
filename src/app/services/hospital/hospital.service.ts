import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../../config/config';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import { Hospital } from '../../models/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  totalHospitales: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
  ) { }

  cargarHospitales() {
    let url = SERVER_URL + '/hospital';
    return this.http.get(url).pipe(
      map((resp: any) => {
        this.totalHospitales = resp.total;
        return resp.hospitales;
      })
    )
  }

  obtenerHospital(id: string) {
    let url = SERVER_URL + '/hospital/' + id;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.hospital;
      })
    )
  }

  borrarHospital(id: string) {
    let url = SERVER_URL + '/hospital/' + id;
    url += '?token=' + this._usuarioService.token;
    return this.http.delete(url).pipe(
      map((resp: any) => {
        swal('Hospital Borrado', 'Eliminado correctamente', 'success');
      })
    )
  }

  crearHospital(nombre: string) {
    let url = SERVER_URL + '/hospital';
    url += '?token=' + this._usuarioService.token;
    return this.http.post(url, { nombre: nombre }).pipe(
      map((resp: any) => resp.hospital)
    )
  }

  buscarHospitales(termino: string) {
    let url = SERVER_URL + "/busqueda/coleccion/hospitales/" + termino;

    return this.http.get(url).pipe(
      map((resp: any) => resp.hospitales)
    );
  }

  actualizartHospital(hospital: Hospital) {
    let url = SERVER_URL + '/hospital/' + hospital._id;
    url += '?token=' + this._usuarioService.token;
    return this.http.put(url, hospital).pipe(
      map((resp: any) => {
        swal('Hospital Actualizado', hospital.nombre, 'success');
        return resp.hospital;
      })
    )
  }
}
