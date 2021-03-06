import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdminGuard } from '../services/guards/admin.guard';
import { VerificatokenGuard } from '../services/guards/verificatoken.guard';


// const pagesRoutes: Routes = [
//   {
//       path: '',
//       component: PagesComponent,
//       canActivate: [ LoginGuard ],
//       children: [
//           { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
//           { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
//           { path: 'graficas1', component: Graficas1Component , data: { titulo: 'Gráficas' }},
//           { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
//           { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
//           { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Tema' } },
//           { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de Usuario' } },
//           //Matenimientos
//           { 
//             path: 'usuarios',
//             canActivate: [ AdminGuard ],
//             component: UsuariosComponent,
//             data: { titulo: 'Mantenimiento de usuarios' }
//           },
//           { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
//       ]
//   }
// ];


// LAZY LOAD
const pagesRoutes: Routes = [
  {
    path: 'dashboard',
    canActivate: [ VerificatokenGuard ],
    component: DashboardComponent,
    data: { titulo: 'Dashboard' }
  },
  { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
  { path: 'graficas1', component: Graficas1Component , data: { titulo: 'Gráficas' }},
  { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
  { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
  { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Tema' } },
  { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de Usuario' } },
  //Matenimientos
  {
    path: 'usuarios',
    canActivate: [ AdminGuard ],
    component: UsuariosComponent,
    data: { titulo: 'Mantenimiento de usuarios' }
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
