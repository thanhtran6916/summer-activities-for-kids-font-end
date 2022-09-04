import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class HttpWrapper {

  constructor(public http: HttpClient, public baseUrl: string) { }

  post(href: string = '', data: any, param: any = {}): Observable<any> {
    return this.http.post(this.baseUrl + `/${href}`, data, {
      params: param
    });
  }
}
