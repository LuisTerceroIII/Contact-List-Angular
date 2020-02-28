import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//this service connect with https://randomuser.me/api -- Random users generator
@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  api: string = `https://randomuser.me/api`

  constructor(private http: HttpClient) { }

  getAll(){
    let path = `${this.api}/?results=50`
    return this.http.get(path)
  }

  getOne() {
    return this.http.get(this.api);
  }
}
