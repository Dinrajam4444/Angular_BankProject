import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor(private http:HttpClient) { }

  // Register Api
  
  signupApi(acno:any,uname:any,psw:any){

    const bodyData={
      acno,
      uname,
      psw
    }
    return this.http.post('http://localhost:3000/bankuser/user-register',bodyData)
  }
 
  // login Api

  loginApi(acno:any,psw:any){

    const bodyData={
      acno,psw
    }
     return this.http.post('http://localhost:3000/bankuser/user-login',bodyData)
  }

  // get userProfile details

  getProfile(acno:any){

    return this.http.get('http://localhost:3000/bankuser/user-profile/'+acno)     // Here we can pass the account number 1000 as param like this as below.
                                                                                  // 'http://localhost:3000/bankuser/user-profile/'+acno     // Here we concanates the data acno to the url, which is string.
  }

}
