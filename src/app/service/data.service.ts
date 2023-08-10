import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// overloading headers

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})



export class DataService {

  constructor(private http:HttpClient) { }

  // method to add token in api header
  
  createHeader(){

    // HttpHeaaders class. This is an inbuilt class which is used to create headers.
    // If we create an object of this class, we will get an object.

    const headers=new HttpHeaders   // Use the reference as headers. The name of the api headerr data's name will be headers. So keep that name.

    // access token from localstorage

    if(localStorage.getItem("token")){
      var token=JSON.parse(localStorage.getItem("token") || "")

    // add token into header

    options.headers= headers.append('access_token',token)
    }

    return options

  }



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

    return this.http.get('http://localhost:3000/bankuser/user-profile/'+acno,this.createHeader())     // Here we can pass the account number 1000 as param like this as below.
                                                                                                      // 'http://localhost:3000/bankuser/user-profile/'+acno     // Here we concanates the data acno to the url, which is string.
  }

  // get balance details

  getBalance(acno:any){

    return this.http.get('http://localhost:3000/bankuser/user-balance/'+acno,this.createHeader())

  }

  // money transfer
  // fromAcno,toAcno,fromAcnoPsw,amount,DateAndTime

  moneyTransferApi(fromAcno:any,toAcno:any,psw:any,amount:any,date:any){
    const bodyData={
      fromAcno,toAcno,psw,amount,date
    }
    return this.http.post('http://localhost:3000/bankuser/money-transfer',bodyData,this.createHeader())
  }

  // transaction history api

  transactionHistoryApi(acno:any){
    return this.http.get('http://localhost:3000/bankuser/user-history/'+acno,this.createHeader())
  }

  // delete account api

  acDelete(acno:any){
    return this.http.delete('http://localhost:3000/bankuser/user-delete/'+acno,this.createHeader())
  }

}
