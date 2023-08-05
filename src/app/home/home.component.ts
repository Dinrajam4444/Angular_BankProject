import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any=""

  constructor(private rout:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("currentUname")) {
        this.user = localStorage.getItem("currentUname")
        // console.log(this.user);
        
    }
  }

  //methods
  
  logout(){
    this.rout.navigateByUrl("")
  }
}
