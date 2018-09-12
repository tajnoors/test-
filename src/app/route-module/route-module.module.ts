import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent}

  //{ path: '', redirectTo: '/login', pathMatch: 'full'},
  //{ path: '**', redirectTo: '/login', pathMatch: 'full'}
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes),
  ],
  
  declarations: []
})
export class RouteModuleModule { }
