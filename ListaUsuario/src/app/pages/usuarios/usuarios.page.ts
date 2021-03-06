import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss']
})
export class UsuariosPage implements OnInit {
  userList: any[] = [];
  constructor(
    public http: HttpClient,
    public loadingController: LoadingController,
    public navCtrl: NavController
  ) {
    this.getUserList();
  }
  async getUserList() {
    const loading = await this.loadingController.create({
      message: 'Cargando..',
      duration: 2000
    });
    
    await loading.present();

    this.http
      .get('https://randomuser.me/api/?seed=foobar&results=10')
      .subscribe(data => {
        console.log(data);
        const key = 'results';
        this.userList = data[key];

        loading.dismiss();
      });
  }
  ngOnInit() {}
}
