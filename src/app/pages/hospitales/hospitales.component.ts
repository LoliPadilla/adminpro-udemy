import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/hospital/hospital.service';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare var swal: any;

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];
  cargando: boolean = false;
  totalRegistros: number = 0;

  constructor(
    public _hospitalService: HospitalService,
    public _modalUploadService: ModalUploadService
  ) {

  }

  ngOnInit() {
    this.cargarHospitales();

    this._modalUploadService.notification
      .subscribe(resp => this.cargarHospitales());
  }


  crearHospital() {

    swal({
      title: 'Crear hospital',
      text: 'Ingrese el nombre del hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then(valor => {
      if (!valor || valor.length === 0) {
        return;
      }

      this._hospitalService.crearHospital(valor)
        .subscribe(() => this.cargarHospitales());
    })

  }

  cargarHospitales() {
    this.cargando = true;
    this._hospitalService.cargarHospitales()
      .subscribe((hospitales: any) => {
        this.totalRegistros = this._hospitalService.totalHospitales;
        this.hospitales = hospitales;
        this.cargando = false;
      })

  }

  buscarHospital(termino: string) {

    if (termino.length <= 0) {
      this.cargarHospitales();
      return;
    }
    this._hospitalService.buscarHospitales(termino)
      .subscribe((resp: any) => {
        this.hospitales = resp;
      })
  }

  guardarHospital(hospital: Hospital) {
    this._hospitalService.actualizartHospital(hospital)
      .subscribe();
  }

  borrarHospital(hospital: Hospital) {
    this._hospitalService.borrarHospital(hospital._id)
      .subscribe(() => {
        this.cargarHospitales();
      });
  }

  actualizarImagen(id: string) {
    this._modalUploadService.mostrarModal('hospitales', id);
  }

}
