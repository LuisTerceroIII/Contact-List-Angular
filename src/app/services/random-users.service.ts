import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
//this service connect with https://randomuser.me/api -- Random users generator
@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  api: string = `https://randomuser.me/api`
  postURL : string = `http://localhost:3000/`

  constructor(private http: HttpClient) { }

  getAll(){
    let path = `${this.api}/?results=50`
    return this.http.get(path)
  }

  getOne() {
    return this.http.get(this.api);
  }

  postOne(user : User){
    let path = `${this.postURL}contact`;
    return this.http.post(path,user);
  }

  getJsonServer(){
    let path = `${this.postURL}contact`
    return this.http.get(path);
  }
}
