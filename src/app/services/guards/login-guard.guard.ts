import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router) { }

  canActivate() {

    if (this._usuarioService.estaLogueado()) {

      console.log('PASO EL GUARD');
      return true;
    }
    else {
      console.log('NO PASO EL GUARD');
      this.router.navigate(['/login']);
      return false;
    }

  }

}
