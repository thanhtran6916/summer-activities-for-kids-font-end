import { Injectable } from '@angular/core';
import {HttpWrapper} from "../../../core/base/http-wrapper";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AuthApi extends HttpWrapper {

  constructor(http: HttpClient) {
    super(http, `${environment.url}`)
  }

  login(user: any) {
    return this.post('auth/login', user);
  }
}
