import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsuarioDetallePage } from './usuario-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioDetallePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsuarioDetallePage]
})
export class UsuarioDetallePageModule {}

