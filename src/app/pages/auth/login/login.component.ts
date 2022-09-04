import { Component, OnInit } from '@angular/core';
import {AuthApi} from "../apis/auth.api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthApi,
              private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    // set mặc định cho các thẻ message validate
    let validName = document.getElementById('validate-username');
    // @ts-ignore
    validName.innerHTML = '';
    let validPassword = document.getElementById('validate-password');
    // @ts-ignore
    validPassword.innerHTML = '';
    let message = document.getElementById('message');
    // @ts-ignore
    message.innerHTML = '';
    // @ts-ignore
    let username = document.getElementById('username').value;
    // @ts-ignore
    let password = document.getElementById('password').value;

    let payload = {
      username: username,
      password: password
    }

    this.auth.login(payload).subscribe((res) => {
      if (res.errorCode == 0) {
        localStorage.setItem('token', JSON.stringify(res.data.token));
        alert("Đăng nhập thành công!");
        this.router.navigate(['']);
      } else {
        if (res.errorCode == 400) {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].fieldName == 'username') {
              // @ts-ignore
              validName.innerHTML = res.data[i].errorMessage;
            }
            if (res.data[i].fieldName == 'password') {
              // @ts-ignore
              validPassword.innerHTML = res.data[i].errorMessage;
            }
          }
        } else {
          // @ts-ignore
          message.innerHTML = res.message;
        }
      }
    }, err => {
      alert("Lỗi hệ thống!");
    })
  }
}
