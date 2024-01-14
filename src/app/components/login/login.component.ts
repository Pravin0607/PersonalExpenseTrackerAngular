import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  constructor(private fb: FormBuilder, private authService: AuthService,private router:Router,private messageService:MessageService) {}

  get email() {
    return this.loginForm.controls["email"];
  }
  get password() {
    return this.loginForm.controls["password"];
  }
  loginUser() {
    const { email, password } = this.loginForm.value;
    return this.authService.getUserByEmail(email as string).subscribe(
      (response) => {
        if(response.length > 0 && response[0].password===password)
        {
          this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'User loged in Successfuly.' });
          sessionStorage.setItem('email',email as string);
          this.router.navigate(["/home"])
        }
        else
        {
          this.messageService.add({ key: 'bc', severity: 'error', summary: 'Failure', detail: 'Invalid Password or Email.' });
        }
      },

      (err) => {
        this.messageService.add({ key: 'bc', severity: 'error', summary: 'Failure', detail: 'Something Went Wrong.' });
      }
    );
  }
}
