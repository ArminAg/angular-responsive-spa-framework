import { Router } from '@angular/router';
import { UserApi } from 'fw/users/user-api';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  formError: string;
  submitting = false;

  constructor(
    private userApi: UserApi,
    private router: Router
  ) { }

  onSubmit(registerForm: NgForm) {
    if (registerForm.valid) {
      console.log('submitting...', registerForm);
      this.submitting = true;
      this.formError = null;

      this.userApi.register(
          registerForm.value.username,
          registerForm.value.email,
          registerForm.value.password,
          registerForm.value.passwordConfirm)
        .subscribe((data) => {
          console.log('got valid: ', data);
          this.router.navigate(['/authenticated']);
        },
        (error) => {
          this.submitting = false;
          console.log('got error: ', error);
          this.formError = error;
        });
    }
  }
}
