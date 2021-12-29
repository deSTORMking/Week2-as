import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-e-info',
  templateUrl:'./e-info.component.html' ,
  styleUrls: ['./e-info.component.css'],
  providers:[DataService],
  
})
export class EInfoComponent implements OnInit {
  infor1:string[]=[];
  infor2:string[]=[];
  infor3:string[]=[];

  getinforservice1(){
    return this.infor1=this.dservice.getinfo1();
  };
  getinforservice2(){
    return this.infor2=this.dservice.getinfo2();
  };
  getinforservice3(){
    return this.infor3=this.dservice.getinfo3();
  };


  constructor(private dservice:DataService) { }

  ngOnInit(): void {
  }
  updateinfo(frm:any){
    this.dservice.addinfo(frm.value.location);
  }
  

}
