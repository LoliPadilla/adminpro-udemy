import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  public usuario: Usuario

  constructor(
    public _sidebar: SidebarService,
    public _userService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this._userService.usuario;
  }

}
