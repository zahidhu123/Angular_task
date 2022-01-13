import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { FormControl,FormGroup,Validators } from "@angular/forms";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {

  msg="";

  constructor(private service:MyserviceService,private routes:Router) {
    if(localStorage.getItem('token')){
      routes.navigate(['login'])
    }
   }

  ngOnInit(): void {
  }

  
  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  get email() { return this.loginForm}

  loginFormData(){
     console.warn(this.loginForm.value)
    //  localStorage.setItem("email",this.loginForm.value.email)
    //  localStorage.setItem("password",this.loginForm.value.password)
    // console.warn(this.loginForm.value.email)
    // console.warn(this.loginForm.value.password)

    this.service.getposts(this.loginForm.value).subscribe((result:any) =>{
      console.log(result)
      console.log(result.token);
      if (result.token !=null) {
       
        console.log('jhghjgtyfutdurddu');
        localStorage.setItem("token",result.token);
        this.service.checkInputData();
        this.routes.navigate(['/dashboard'])
      }
      else{
        this.routes.navigate(['/login'])
      }
    })
  }



  
}
