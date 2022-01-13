import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


   // onSubmit(data:any){
  //   console.warn(data);
  // }

  loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    number:new FormControl('',Validators.required)
  })

  get email() { return this.loginForm}
  get password() {return this.loginForm}
  get number() {return this.loginForm}

  collectData(){
    console.warn(this.loginForm.value)
  }
}
