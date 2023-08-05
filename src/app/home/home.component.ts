import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any=""
  acno:any
  profileData:any={}

  constructor(private rout:Router,private ds:DataService ) { }

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

  profileView(){
    if(localStorage.getItem("currentAcno")){
      this.acno= localStorage.getItem("currentAcno")
      // console.log(this.acno);
      
    }
    this.ds.getProfile(this.acno).subscribe((response:any)=>{
      // console.log(response);
      this.profileData=response
      
    })

  }

}
