import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './../interfaces/contact';

// This service connect with a local API - not use
@Injectable({
  providedIn: 'root'
})
export class ContactsApiService {

  API: string = '/api/contacts'

  constructor(private http: HttpClient) {}
  getAllContacts() {
    let path = this.API;
    return this.http.get<Contact[]>(path);
  }
  getOneContact(id:string) {
    let path = `${this.API}/${id}`
    return this.http.get<Contact>(path)
  }
  postContact(newContact: Contact) {
    let path = this.API;
    return this.http.post(path,newContact)
  }
}
