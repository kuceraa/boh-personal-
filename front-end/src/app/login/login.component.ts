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
  user: { id: number; username: string; };

  constructor(private readonly loginService: LoginService) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    //TODO: yeet
    this.loginService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value).subscribe(
      (response) => {
        this.user = response;
        alert("Login Successful");
      },
      (err: HttpErrorResponse) => {
        this.user = null;
        alert(err.status);
      }
    );
    this.loginForm.reset();
  }

}
