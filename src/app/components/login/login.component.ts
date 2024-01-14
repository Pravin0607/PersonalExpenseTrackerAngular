import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm=this.fb.group({
  username:['',Validators.required],
  password:['',Validators.required]
});
constructor(private fb:FormBuilder){}
get username(){
  return this.loginForm.controls['username']
}
get password(){
  return this.loginForm.controls['password']
}
}
