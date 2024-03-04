import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/auth';
import { UserService } from '../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  updateForm = this.fb.group(
    {
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNo: ['', Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
    },
    {
      validators: passwordMatchValidator,
    }
  );

  userData:Partial<User>={};
  constructor(private user:UserService,private fb:FormBuilder,private msgService:MessageService){}

  ngOnInit(): void {
      this.userData=this.user.data;
      this.userData.email=sessionStorage.getItem('email') as string;
      this.getUserDetails()
  }

updateUser(){
  
  this.user.updateUser(this.updateForm.value).subscribe(
    (data:{success?:boolean,message?:string})=>{
      if(data.success)
      {
        this.msgService.add({key:"bc",severity:'success',summary:'Success',detail:data.message as string})
      }
      else
      {
        this.msgService.add({key:"bc",severity:'error',summary:'Error',detail:data.message as string})
      }
    }
  ,(error)=>{
    console.log(error)
    this.msgService.add({key:"bc",severity:'error',summary:'Error',detail:'Error in updating user details.'})
  }
  );
}

getUserDetails()
{
  this.user.getUser().subscribe(
    (data:{success?:boolean,data?:{firstName:string,lastName:string,phoneNo:string,email:string}})=>{
      console.log(data);
      if(data.success)
      {
        this.updateForm.patchValue({
          firstName: data.data?.firstName,
          lastName: data.data?.lastName,
          email: data.data?.email,
          phoneNo: data.data?.phoneNo,
        });
      }
      else
      {
        this.msgService.add({key:"bc",severity:'error',summary:'Error',detail:'Error in fetching user details'})
      }
    }
  ,(error)=>{console.log(error);
  this.msgService.add({key:"bc",severity:'error',summary:'Error',detail:'Error in fetching user details'})
  }
  );

}

get phoneNo() {
    return this.updateForm.controls["phoneNo"];
  }

  get firstName() {
    return this.updateForm.controls["firstName"];
  }
  get lastName() {
    return this.updateForm.controls["lastName"];
  }
  get email() {
    return this.updateForm.controls["email"];
  }
  get password() {
    return this.updateForm.controls["password"];
  }
  get confirmPassword() {
    return this.updateForm.controls["confirmPassword"];
  }
}
