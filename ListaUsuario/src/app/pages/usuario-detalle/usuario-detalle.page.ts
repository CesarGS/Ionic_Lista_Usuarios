import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from './../../services/usuarios.service';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.page.html',
  styleUrls: ['./usuario-detalle.page.scss'],
})
export class UsuarioDetallePage implements OnInit {
information = null;

  constructor(public activatedRoute: ActivatedRoute, public usuarioService: UsuariosService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.usuarioService.getDetails(id).subscribe(result => {
      this.information = result;
    });
  }
   openWebsite(){
    window.open(this.information.Website, '_blank');
  }
}

