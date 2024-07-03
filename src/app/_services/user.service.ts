import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:8081';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private http: HttpClient, private userAuthser: UserAuthService) {}

  public login(loginData: any): Observable<any> {
    return this.http.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public forUser(){
    return this.http.get(this.PATH_OF_API + '/forUser', {responseType:"text"});
  }

  public forAdmin(){
    return this.http.get(this.PATH_OF_API + '/forAdmin', {responseType:"text"});
  }

  public registerNewUser(value:any){
    return this.http.post(this.PATH_OF_API + '/registerNewUser', value);
  }
  
  public roleMatch(allowedRoles: string | any[]): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthser.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            // break;
            return isMatch;
          } else {
            // isMatch
            // break;
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }
}
