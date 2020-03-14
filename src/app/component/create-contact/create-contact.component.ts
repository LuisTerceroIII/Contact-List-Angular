import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "./../../interfaces/user";
import { RandomUsersService } from "./../../services/random-users.service";

@Component({
  selector: "app-create-contact",
  templateUrl: "./create-contact.component.html",
  styleUrls: ["./create-contact.component.css"]
})
export class CreateContactComponent implements OnInit {
  isLinear = false;
  firstFormGroup_FULLNAME: FormGroup;
  secondFormGroup_CONTACT_INFO: FormGroup;
  thirdFormGroup_ADDRESS: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private jsonServer: RandomUsersService
  ) {}

  createUser() {
    let contactName = this.firstFormGroup_FULLNAME.value;
    let contactInfo = this.secondFormGroup_CONTACT_INFO.value;
    let locationInfo = this.thirdFormGroup_ADDRESS.value;
    let newContact: User = {
      fullname: `${contactName.title} ${contactName.name} ${contactName.lastname}`,
      email: `${contactInfo.email}`,
      phone: `${contactInfo.phone}`,
      cell: `${contactInfo.cell}`,
      location: `${locationInfo.streetName} ${locationInfo.streetNumber}, ${locationInfo.city}, ${locationInfo.country}`
    };

    console.log(`Aqui el usuario a ingresar: \n ${newContact}`)
    this.jsonServer
      .postOne(newContact).subscribe(res => console.log(res))

      /* .subscribe(res => console.log(`Respuesta \n ${res}`)); */
   /* 
    this.jsonServer.getJsonServer().subscribe(contact => {
      console.log(contact); */
    }
  

  ngOnInit() {
    this.firstFormGroup_FULLNAME = this._formBuilder.group({
      title: ["", [Validators.required, Validators.minLength(2)]],
      name: ["", [Validators.required, Validators.minLength(2)]],
      lastname: ["", [Validators.required, Validators.minLength(2)]]
    });
    this.secondFormGroup_CONTACT_INFO = this._formBuilder.group({
      phone: ["", [Validators.required, Validators.pattern("([0-9]){11}")]],
      cell: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    });
    this.thirdFormGroup_ADDRESS = this._formBuilder.group({
      country: ["", Validators.required],
      city: ["", Validators.required],
      streetName: ["", Validators.required],
      streetNumber: ["", Validators.required]
    });
  }
}

/* --------------

      Acceso a valores del formulario
  submit() {
    
    console.log(
      `FUll NAME ${JSON.stringify(this.firstFormGroup_FULLNAME.value)}
        `
    );

    console.log(
      `CONTACT INFO${JSON.stringify(this.secondFormGroup_CONTACT_INFO.value)}`
    );

    console.log(`ADDRESS ${JSON.stringify(this.thirdFormGroup_ADDRESS.value)}`);
    
  } ---------------------------*/
