import { Component } from '@angular/core';
import{ Router } from '@angular/router'
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="Happy banking with us.."
  pdata="Enter account number"

  // acno:any=""
  // psw:any=""

 

  constructor(private rout:Router,private ds:DataService, private fb:FormBuilder) { }

  
  // model form

  loginForm=this.fb.group({

    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]

  })
    


  login(){

    if(this.loginForm.valid){
      var acno=this.loginForm.value.acno
      var psw=this.loginForm.value.psw

      // api call

      this.ds.loginApi(acno,psw).subscribe((response:any)=>{
        alert(`${response.uname} login success`)

        // store uname,acno in local storage

        localStorage.setItem("currentUname",response.uname)
        localStorage.setItem("currentAcno",response.acno)
        localStorage.setItem("token",JSON.stringify(response.token))
        // console.log(response.token);
        

        this.rout.navigateByUrl("home")

        
      },
      response=>{
        alert(response.error)
      }
      )

    }
    else{
      alert("invalid form")
    }
    

    
    
  }

  }


  

  


