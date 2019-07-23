import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public http: HttpClient) { 
  }
  url = 'https://randomuser.me';
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}`);
  }
}
