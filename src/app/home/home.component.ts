import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any = ""
  acno: any
  profileData: any = {}
  balanceData: any = {}
  message: any = ""
  status: any = true
  shareAcno: any = ""

  constructor(private rout: Router, private ds: DataService, private fb: FormBuilder,
    private datePipe: DatePipe) { }

  ngOnInit(): void {

    if (!localStorage.getItem("currentAcno")) {
      alert("Please login first")
      this.rout.navigateByUrl("")
    }

    if (localStorage.getItem("currentUname")) {
      this.user = localStorage.getItem("currentUname")
      // console.log(this.user);

    }
  }

  // model form for money transfer

  moneyTransferForm = this.fb.group({

    toAcno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]

  })

  //methods

  statement() {
    this.rout.navigateByUrl('statement')
  }

  logout() {

    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUname")
    this.rout.navigateByUrl("")
  }

  profileView() {
    if (localStorage.getItem("currentAcno")) {
      this.acno = localStorage.getItem("currentAcno")
      // console.log(this.acno);

    }
    this.ds.getProfile(this.acno).subscribe((response: any) => {
      // console.log(response);
      this.profileData = response

    })

  }

  getBalance() {
    if (localStorage.getItem("currentAcno")) {
      this.acno = localStorage.getItem("currentAcno")
      // console.log(this.acno);
    }
    this.ds.getBalance(this.acno).subscribe((response: any) => {
      // console.log(response);

      this.balanceData = response
    })
  }

  transfer() {

    if (this.moneyTransferForm.valid) {

      // from Acno
      if (localStorage.getItem("currentAcno")) {
        this.acno = localStorage.getItem("currentAcno")
        // console.log(this.acno);
      }
      var path = this.moneyTransferForm.value

      // toAcno
      var toAcno = path.toAcno
      // console.log(toAcno);

      // psw
      var psw = path.psw
      // console.log(psw);

      // amount
      var amount = path.amount
      // console.log(amount);

      //date
      var dateTime = new Date()
      var dateData = this.datePipe.transform(dateTime, 'short')
      // console.log(dateData);


      // Api call

      this.ds.moneyTransferApi(this.acno, toAcno, psw, amount, dateData).subscribe((result: any) => {

        this.message = result.message
        this.status = true

      },
        result => {
          this.message = result.error.message
          this.status = false
        }
      )

    }
    else {
      this.message = "Invalid form"
      this.status = false
    }
  }

  deleteAc() {
    // share data

    if (localStorage.getItem("currentAcno")) {
      this.shareAcno = localStorage.getItem("currentAcno")

    }
  }

  cancel() {
    this.shareAcno = ""
  }

  deleteAccount(event: any) {
    console.log(event);
    this.ds.acDelete(event).subscribe((result: any) => {
      alert(`${event} Deleted successfully`)
      this.logout()
    })

  }

}
