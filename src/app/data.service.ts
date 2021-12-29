import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  info1:string[]=["Storm",'12','xyz'];
  info2:string[]=["StormCLICK",'12','x21yz'];
  info3:string[]=["StormLABS",'12','13xyz'];

  getinfo1(){
   return this.info1;
  }
  getinfo2(){
    return this.info2;
  }
  getinfo3(){
    return this.info3;
   }
   addinfo(info:any){
      this.info1.push(info);
      this.info2.push(info);
      this.info3.push(info);
      return this.info1
      
   }
  constructor() { }
}
