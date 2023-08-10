import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

import jspdf from 'jspdf';
import 'jspdf-autotable'

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  acno: any
  transactions: any = []
  date: any
  searchKey: any = ""

  constructor(private rout: Router, private ds: DataService) {

  }

  ngOnInit(): void {

    //date

    this.date = new Date()
    console.log(this.date);


    // acno
    if (localStorage.getItem("currentAcno")) {
      this.acno = localStorage.getItem("currentAcno")
    }
    this.ds.transactionHistoryApi(this.acno).subscribe((result: any) => {
      this.transactions = result
      console.log(this.transactions);

    })
  }

  searchKeyChange(key: any) {
    this.searchKey = key
  }


  backToHome() {

    this.rout.navigateByUrl('home')

  }

  convertPdf() {

    // create an object for jsPDF class

    var pdf = new jspdf()

    // set columns title

    let col = ["Transaction Type", "Amount", "Account Holder Name", "Date"]

    // set rows

    let row: any = []

    // style set

    // font size

    pdf.setFontSize(16)

    // title

    pdf.text("Account Statement", 15, 10)

    // text color

    pdf.setTextColor(99)

    // font size reset

    pdf.setFontSize(12)

    // array of objects convert to array of arrays(nested array)

    var allItems = this.transactions
    for (let i of allItems) {
      let rowData = [i.type, i.amount, i.user, i.date]
      row.push(rowData)
    }

    // convert the nested array to pdf   

    (pdf as any).autoTable(col, row, { startY: 15 })

    // open pdf into a new window

    pdf.output('dataurlnewwindow')

    // pdf download

    pdf.save('miniStatement.pdf')   // Here the generated pdf will have all outputs. We don't get filtered outputs. Here we only converts the array.

    
  }

}
