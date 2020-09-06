import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    public router: Router) { }

  ngOnInit() {
    // login form
    this.loginForm = this.fb.group({
      username: [null],
      password: [null]
    });

  }
  onSubmit() {
    this.router.navigate(['/add-post']);
  }

}
