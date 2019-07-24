import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  userList: any[] = [];
  constructor(
    public http: HttpClient,
    public loadingController: LoadingController
  ) {
    this.userList = [];
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
  getDetails(index) {
    return this.userList[index];
  }
}
