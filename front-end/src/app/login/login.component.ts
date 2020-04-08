import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  usernameStored;
  passwordStored;

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    //TODO: yeet
    this.usernameStored = this.loginForm.controls['username'].value;
    this.passwordStored = this.loginForm.controls['password'].value;
    this.loginForm.reset();
    console.warn("this.loginForm.value");
  }

}
