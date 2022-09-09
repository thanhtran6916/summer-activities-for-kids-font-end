import { Component, OnInit } from '@angular/core';
import {AuthApi} from "../apis/auth.api";
import {Router} from "@angular/router";
import { HttpHeaders } from '@angular/common/http';

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

    this.auth.login(payload).then((res) => {
      // @ts-ignore
      if (res.access_token) {
        // @ts-ignore
        localStorage.setItem('token', JSON.stringify(res.access_token));
        alert("Đăng nhập thành công!");
        this.router.navigate(['']);
      } else {
        // @ts-ignore
        message.innerHTML = 'Tài khoản hoặc mật khẩu không chính xác!';
      }
    }, err => {
      if (err.status == 401) {
        // @ts-ignore
        message.innerHTML = 'Tài khoản hoặc mật khẩu không chính xác!';
      } else {
        alert('Lỗi hệ thống!');
      }
    })
  }
}
