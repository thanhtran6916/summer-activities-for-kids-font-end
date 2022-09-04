import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // login() {
  //   // @ts-ignore
  //   this.username = document.getElementById("username").value();
  //   // @ts-ignore
  //   this.password = document.getElementById("password").value();
  //
  //
  // }
}
