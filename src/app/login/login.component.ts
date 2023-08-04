import {Component, OnInit} from '@angular/core';
import{Router} from '@angular/router'
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="Happy banking with us.."
  pdata="Enter account number"

  acno:any=""
  psw:any=""

 

  constructor(private rout:Router,private ds:DataService) { }

  ngOnInit(): void {

    
    
  }




  login(){

    
    console.log(this.acno);
    console.log(this.psw);

    this.rout.navigateByUrl("home")
    
  }

  

}
