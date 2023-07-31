import {Component} from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="Happy banking with us.."
  pdata="Enter account number"

  acno:any=""
  psw:any=""

  constructor(private rout2:Router) { }

  ngOnInit(): void {
  }

  // login(a:any,b:any){

  //   // alert("login clicked")

  //   console.log(a.value);
  //   console.log(b.value);
    
  // }


  login(){

    // alert("login clicked")

    // this.acno=a.value
    // this.psw=b.value
    console.log(this.acno);
    console.log(this.psw);

    this.rout2.navigateByUrl("home")
    
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
