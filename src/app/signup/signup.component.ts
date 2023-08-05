import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  pswMatch: boolean = false






  constructor(private rout: Router, private fb: FormBuilder, private ds: DataService) { }

  // model for signup form

  signupModelForm = this.fb.group({

    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]

  })

  //methods

  signup() {

    var path = this.signupModelForm.value
    var acno = path.acno
    var uname = path.uname
    var psw = path.psw
    var cpsw = path.cpsw

    if (this.signupModelForm.valid) {
      if (psw == cpsw) {
        this.pswMatch = false
        //api call
        this.ds.signupApi(acno, uname, psw).subscribe((Response: any) => {
          alert(`${Response.uname} is Registered`);
          this.rout.navigateByUrl('')
        },
          Response => {
            alert(Response.error);

          })

      }
      else {
        this.pswMatch = true
      }


    }
    else{
      alert("invalid form")
    }

   
    

  }


}
