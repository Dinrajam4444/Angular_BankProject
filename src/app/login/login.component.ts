import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="Happy banking with us"
  pdata="Enter username"
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    alert("login clicked")
  }

}
