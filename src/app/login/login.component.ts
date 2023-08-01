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

  serviceData:any=""

  constructor(private rout:Router,private ds:DataService) { }

  ngOnInit(): void {

    console.log(this.ds.sData);
    this.serviceData=this.ds.sData
    
  }

  // login(a:any,b:any){

  //   // alert("login clicked")

  //   console.log(a.value);
  //   console.log(b.value);
    
  // }


  login(){

    this.ds.accessData("hello")

    // alert("login clicked")

    // this.acno=a.value
    // this.psw=b.value
    console.log(this.acno);
    console.log(this.psw);

    this.rout.navigateByUrl("home")
    
  }

  // acnoChange(event:any){

  //   // console.log(event.target.value);
  //   this.acno=event.target.value
  //   console.log(this.acno);
    
  // }

  // acnoPassword(event:any){

  //   // console.log(event.target.value);
  //   this.psw=event.target.value
  //   console.log(this.psw)  
    
  // }

}
