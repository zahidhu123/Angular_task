import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  
  url="https://reqres.in/api/login"
  constructor( private http:HttpClient ) { }

  getposts( data:any)
  {
    return this.http.post(this.url,data);
  }

  checkInputData(){
    if (localStorage.getItem("token") ) {
        return true;
    }

    else{
      return false;
    }
  }



}
