import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from "@angular/common";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  vf: any = {};
  newEntry = false;
  visitors: any = [];
  getValue: any;
  isEdit: boolean;
  currentDate: any;
  currentTime: any;
  constructor(public formBuilder: FormBuilder, public avtivatedRoute: ActivatedRoute, public router: Router) {
    this.getValue = this.avtivatedRoute.snapshot.paramMap.get("data")
    try {
      console.log(JSON.parse(this.getValue))
    } catch {
      console.log("not found");
    }
    if (JSON.parse(this.getValue) != null) {
      this.isEdit = true;
      this.vf = JSON.parse(this.getValue);
    } else {
      this.isEdit = false;
      this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US', '+0530');
      console.log(this.currentDate);
      this.currentTime = formatDate(new Date(), 'HH:mm', 'en-US', '+0530');
      console.log(this.currentTime);
      this.vf.entryDate = this.currentDate;
      this.vf.entryTime = this.currentTime;
    }
  }
  goBack() {
    console.log("Entered");

    this.router.navigate(['tabs/tab2']);
  }
  ionViewWillEnter() {
    console.log('app component view enter');
    try {
      this.visitors = JSON.parse(localStorage.visitorList);
    } catch {

      localStorage.visitorList = JSON.stringify(this.visitors);
    }
  }
  public errorMessages = {
    name: [
      { type: 'required', message: 'Please enter name' },
      { type: 'pattern', message: 'Please enter valid name' },
      // { type: 'maxlength', message: 'Phone number length cannot be greater or less than 10 dgit.' },
      // { type: 'minlength', message: 'Phone number length cannot be greater or less than 10 dgit.' }
    ],
    email: [
      { type: 'required', message: 'Please enter email address' },
      { type: 'pattern', message: 'Please enter valid email' },
    ],
    phoneNo: [
      { type: 'required', message: 'Please enter phone number' },
      { type: 'pattern', message: 'Please enter valid number' },
      { type: 'maxlength', message: 'Phone number should be 10 dgit.' },
      { type: 'minlength', message: 'Phone number should be 10 dgit.' }
    ],
    typeVisit: [
      { type: 'required', message: 'Please select visitor type' },
    ],
    meet: [
      { type: 'required', message: 'Please enter name of person to visit' },
      { type: 'pattern', message: 'Please enter valid name' },
    ],
    entryDate: [
      { type: 'required', message: 'Please select date of entry' }
    ],
    entryTime: [
      { type: 'required', message: 'Please select entry time' },
    ],
    exitTime: [
      // { type: 'required', message: 'Please select exit time' }
    ]
  }

  visitorForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    email: ['', [Validators.required, Validators.pattern("^[[a-zA-Z0-9-_]*(\.|[a-z0-9])[a-zA-Z0-9]+@+[a-zA-Z0-9-_]+(\.[a-z]{2,3}){1,2}]*$")]],
    phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10), Validators.minLength(10)]],
    typeVisit: [[Validators.required]],
    meet: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    entryDate: ['', [Validators.required]],
    entryTime: ['', [Validators.required]],
    exitTime: ['', []]
  })

  get errorControl() {
    return this.visitorForm.controls;
  }

  get name() {
    return this.visitorForm.get("name");
  }
  get email() {
    return this.visitorForm.get("email");
  }
  get phoneNo() {
    return this.visitorForm.get("phoneNo");
  }
  get typeVisit() {
    return this.visitorForm.get("typeVisit");
  }
  get meet() {
    return this.visitorForm.get("meet");
  }
  get entryDate() {
    return this.visitorForm.get("entryDate");
  }
  get entryTime() {
    return this.visitorForm.get("entryTime");
  }
  get exitTime() {
    return this.visitorForm.get("exitTime");
  }

  save() {
   if(!this.isEdit){
    if (JSON.parse(localStorage.visitorList).length) {
      this.visitors = JSON.parse(localStorage.visitorList);
    } else {
      this.visitors = [];
    }
    this.vf.id = this.visitors.length + 1;
    this.visitors.push(this.vf)
  }else if(this.isEdit){
console.log(this.vf.id);
if (JSON.parse(localStorage.visitorList).length) {
  this.visitors = JSON.parse(localStorage.visitorList);
}
for(var i=0;i<this.visitors.length;i++){
  if(this.visitors[i].id == this.vf.id){
    this.visitors[i] = this.vf;
  }
}
  }
    console.log(this.vf);
    console.log(this.visitors);
    localStorage.visitorList = JSON.stringify(this.visitors);
    this.vf = {};
    this.router.navigate(['tabs/tab2']);
  }
}
