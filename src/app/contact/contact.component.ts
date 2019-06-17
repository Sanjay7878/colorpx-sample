import { Component, OnInit } from '@angular/core';

import {ToastrService} from 'ngx-toastr' 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public firstName: string
  public lastName: string
  public email: string
  public event: string
  public mobile: number
  public description: any

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
  }

  public checkFormDetails=()=>{
    if(!this.firstName){
      this.toastr.warning('Please Enter First Name')
    }else if(!this.lastName){
      this.toastr.warning('Please Enter Last Name')
    }else if(!this.email){
      this.toastr.warning('Please Enter Email Address')
    }else if(!this.event){
      this.toastr.warning('Please Select An Event Need')
    }else if(!this.mobile){
      this.toastr.warning('Please Enter Mobile Number')
    }else if(!this.description){
      this.toastr.warning('Please Enter Description')
    }else{
     let data = {
       firstName:this.firstName,
       lastName:this.lastName,
       email:this.email,
       event:this.event,
       mobile:this.mobile,
       description:this.description
     }
     console.log(data)
    }
  } //end check form



}
