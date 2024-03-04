import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/auth';
import { UserService } from '../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/password-match.directive';

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
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
    },
    {
      validators: passwordMatchValidator,
    }
  );

  userData:Partial<User>={};
  constructor(private user:UserService,private fb:FormBuilder){}

  ngOnInit(): void {
      this.userData=this.user.data;
      this.userData.email=sessionStorage.getItem('email') as string;

      this.updateForm.patchValue({
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        email: this.userData.email,
        password: '',  // You can choose to assign a default value or leave it empty
        confirmPassword: '',  // You can choose to assign a default value or leave it empty
      });
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
