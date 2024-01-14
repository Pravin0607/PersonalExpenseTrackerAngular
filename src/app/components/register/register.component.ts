import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { passwordMatchValidator } from "../../shared/password-match.directive";
import { AuthService } from "../../services/auth.service";
import { User } from "../../interfaces/auth";
import { MessageService } from "primeng/api";
import { Router } from "@angular/router";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
})
export class RegisterComponent {
  registerForm = this.fb.group(
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

  constructor(private fb: FormBuilder, private authService: AuthService,private messageService:MessageService,private router:Router) {}

  get firstName() {
    return this.registerForm.controls["firstName"];
  }
  get lastName() {
    return this.registerForm.controls["lastName"];
  }
  get email() {
    return this.registerForm.controls["email"];
  }
  get password() {
    return this.registerForm.controls["password"];
  }
  get confirmPassword() {
    return this.registerForm.controls["confirmPassword"];
  }
  submitDetails() {
    let postdata = { ...this.registerForm.value };
    delete postdata.confirmPassword;
    console.log(postdata);
    this.authService.registerUser(postdata as User).subscribe(
      (response) => {
        this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'User Registered Success Fully.' });
        this.router.navigate(['/login'])
      },
      (err) => {
        this.messageService.add({ key: 'bc', severity: 'error', summary: 'Failure', detail: 'Failed To Register User.' }); 
      }
    );
  }
}
