import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from './../../services/usuarios.service';
import { HttpClient } from '@angular/common/http';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.page.html',
  styleUrls: ['./usuario-detalle.page.scss']
})
export class UsuarioDetallePage implements OnInit {
  information = {};
  index = 0;
  constructor(
    public http: HttpClient,
    public activatedRoute: ActivatedRoute,
    public usuarioService: UsuariosService,
    public navCtrl: NavController,
    public loadingController: LoadingController
  ) {
    this.index = 0;
    this.information = { gender: 'asd' };
    
  }

  ngOnInit() {
    this.index = parseInt(this.activatedRoute.snapshot.paramMap.get('param1'));
    if (!this.index) {
      this.index = 0;
    }
    console.log(this.index);
    this.information = this.usuarioService.getDetails(this.index);

    console.log('this.information 2');
    console.log(this.information);
  }
}
