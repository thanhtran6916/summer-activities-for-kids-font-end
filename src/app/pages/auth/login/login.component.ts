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
    let validPassword: any = document.getElementById('validate-password');
    validPassword.innerHTML = '';
    let message: any = document.getElementById('message');
    message.innerHTML = '';
    // @ts-ignore
    let username = document.getElementById('username').value;
    // @ts-ignore
    let password = document.getElementById('password').value;

    let payload = {
      username: username,
      password: password
    }

    this.auth.login(payload).then((res: any) => {
      if (res.access_token) {
        localStorage.setItem('token', JSON.stringify(res.access_token));
        alert("Đăng nhập thành công!");
        this.router.navigate(['']);
      } else {
        message.innerHTML = 'Tài khoản hoặc mật khẩu không chính xác!';
      }
    }, err => {
      if (err.status == 401) {
        message.innerHTML = 'Tài khoản hoặc mật khẩu không chính xác!';
      } else {
        alert('Lỗi hệ thống!');
      }
    })
  }
}
