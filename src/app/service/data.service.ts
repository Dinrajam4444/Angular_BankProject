import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sData="Data inside service file"

  constructor() { }

  accessData(data:any){
    console.log(data);
    
  }
}
