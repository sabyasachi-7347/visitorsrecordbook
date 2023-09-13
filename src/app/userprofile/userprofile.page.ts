import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {
  pro:any={};
  editpro = false;
  constructor( public router:Router) { }

  ngOnInit() {
    if(localStorage.userId){
      this.pro.name= 'Sabyasachi Nirakar Parida';
      this.pro.email = 'sabya1p@gmail.com';
      this.pro.mobile = '8652343177';
      this.pro.address = 'kalyan, maharashtra, india';
    }else{
      console.log("not login");
      this.router.navigate(['login']);
    }


  }

}
