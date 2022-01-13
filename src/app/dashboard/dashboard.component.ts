import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isloggedin=false;

  constructor( private router:Router) {
    if (localStorage.getItem('token')) {
      this.isloggedin=true;
    }
   }

  ngOnInit(): void {
  }


  onLogout(){
    localStorage.removeItem('token');
    this.isloggedin=false;
    this.router.navigate(['login']);
  }
}
