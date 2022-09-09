import { Injectable } from '@angular/core';
import {HttpWrapper} from "../../../core/base/http-wrapper";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AuthApi {

  constructor(private http: HttpClient) {
  }

  login(user: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    let payload = new URLSearchParams();
    payload.set('client_id', environment.keycloak.client_id);
    payload.set('client_secret', environment.keycloak.client_secret);
    payload.set('grant_type', 'password');
    payload.set('username', user.username);
    payload.set('password', user.password);

    return this.http.post(`${environment.url_keycloak}/realms/summer-activity/protocol/openid-connect/token`, payload.toString(), httpOptions)
      .toPromise();
  }
}
