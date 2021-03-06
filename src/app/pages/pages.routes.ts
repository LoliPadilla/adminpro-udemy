import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medico/medicos.component';
import { MedicoComponent } from './medico/medico.component';

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      { path: "dashboard", component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: "progress", component: ProgressComponent, data: { titulo: 'Progress' } },
      { path: "graficas1", component: Graficas1Component, data: { titulo: 'Graficas' } },
      { path: "promesas", component: PromesasComponent, data: { titulo: 'Promesas' } },
      { path: "rxjs", component: RxjsComponent, data: { titulo: 'RxJs' } },
      { path: "account-settings", component: AccountSettingsComponent, data: { titulo: 'Ajustes' } },
      { path: "perfil", component: ProfileComponent, data: { titulo: 'Perfil de Usuario' } },
      //Mantenimiento
      { path: "usuarios", component: UsuariosComponent, data: { titulo: 'Usuarios' } },
      { path: "hospitales", component: HospitalesComponent, data: { titulo: 'Mantenimiento Hospitales' } },
      { path: "medicos", component: MedicosComponent, data: { titulo: 'Mantenimiento Medicos' } },
      { path: "medico/:id", component: MedicoComponent, data: { titulo: 'Actualizar Medico' } },


      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forRoot(pagesRoutes, {
  useHash: true
});
