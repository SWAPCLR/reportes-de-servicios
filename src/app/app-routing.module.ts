import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NuevoComponent} from './nuevo/nuevo.component'
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'nuevo', component:NuevoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }