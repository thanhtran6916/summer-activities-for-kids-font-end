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
            alert(res.data[i].errorMessage);
          }
        } else {
          alert(res.message);
        }
      }
    }, err => {
      alert("Lỗi hệ thống!");
    })
  }
}
