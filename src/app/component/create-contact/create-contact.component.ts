import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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

  constructor(private _formBuilder: FormBuilder) {}

  submit() {
    console.log(
      `FUll NAME ${JSON.stringify(this.firstFormGroup_FULLNAME.value)}
        `
    );

    console.log(
      `CONTACT INFO${JSON.stringify(this.secondFormGroup_CONTACT_INFO.value)}`
    );

    console.log(
      `ADDRESS ${JSON.stringify(this.thirdFormGroup_ADDRESS.value)}`
    );
    
  }

  ngOnInit() {
    this.firstFormGroup_FULLNAME = this._formBuilder.group({
      title: ["", Validators.required],
      name: ["", Validators.required],
      lastname: ["", Validators.required]
    });
    this.secondFormGroup_CONTACT_INFO = this._formBuilder.group({
      phone: ["", Validators.required],
      cell: ["", Validators.required],
      email: ["", Validators.required]
    });
    this.thirdFormGroup_ADDRESS = this._formBuilder.group({
      country: ["", Validators.required],
      city: ["", Validators.required],
      streetName: ["", Validators.required],
      streetNumber: ["", Validators.required]
    });
  }
}
