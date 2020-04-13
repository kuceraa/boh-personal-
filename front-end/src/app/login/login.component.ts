import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  usernameStored;
  passwordStored;
  user: { id: number; username: string; };

  constructor(private readonly loginService: LoginService) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    //TODO: yeet
    this.usernameStored = this.loginForm.controls['username'].value;
    this.passwordStored = this.loginForm.controls['password'].value;
    this.loginService.login(this.usernameStored, this.passwordStored).subscribe(
      (response) => {
        this.user = response;
      },
      (err: HttpErrorResponse) => {
        this.user = { id: 0, username: 'not authorized' };
      }
    );
    this.loginForm.reset();
    console.warn("this.loginForm.value");
  }

}
