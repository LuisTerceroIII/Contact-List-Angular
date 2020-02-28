import { Component, OnInit, ViewChild } from "@angular/core";
import { ContactsApiService } from "./../../services/contacts-api.service";
import { Contact } from "./../../interfaces/contact";
import { MatTable } from '@angular/material';

var allContact: Contact[] = [];

@Component({
  selector: "app-all-contacts",
  templateUrl: "./all-contacts.component.html",
  styleUrls: ["./all-contacts.component.css"]
})



export class AllContactsComponent implements OnInit {
  columnsDisplay: string[] = ["id", "fullname", "phoneNumber", "email", "action"];
  dataSource = allContact;
  table_index: number = 0;
  columns =[
    {title: 'No.',name:'id'},
    {title: 'Full name',name:'fullname'},
    {title: 'Phone Number',name:'phoneNumber'},
    {title: 'Email',name:'email'},
    {title: 'Action',name:'action'}

  ]

  @ViewChild(MatTable,{static:false}) table: MatTable<any>;

  constructor(private Api_contact: ContactsApiService) {}

  getAll() {
    this.Api_contact.getAllContacts().subscribe(contacts => {
      let newContact: Contact;
      for (let i = 0; i < contacts.length; i++) {
        newContact = {
          id: i+1,
          fullname: `${contacts[i].name} ${contacts[i].lastName}`,
          phoneNumber: contacts[i].phoneNumber,
          email: contacts[i].email
        };
        allContact.push(newContact);
        console.log(newContact)
      }
      this.table.renderRows();
      
     
    });
  }

  ngOnInit() {
    this.getAll();
  }

  delete(): void {}
}
