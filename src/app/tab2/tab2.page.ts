import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  visitors:any = [];
  constructor(public router:Router) {}
ionViewWillEnter(){
  console.log('app component view enter');
  try{
    this.visitors = JSON.parse(localStorage.visitorList); 
   }catch{
    this.visitors = [];
    //  localStorage.visitorList =JSON.stringify(this.visitors);
   }
}
goto(visitor){
  console.log(visitor);
  this.router.navigate(['tabs/tab1',{data:JSON.stringify(visitor)}])
  
}
}
