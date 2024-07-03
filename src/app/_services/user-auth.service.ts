import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:any[]){
    localStorage.setItem('roles',JSON.stringify(roles));
  }

  public getRoles(): any[]{
    const roles = localStorage.getItem('roles');
    return roles ? JSON.parse(roles) : [];
    // return JSON.parse(localStorage.getItem('roles'));
  }

  public setToken(jwtToken:any){
    localStorage.setItem("jwtToken", jwtToken)
  }

  public getToken(): any{
    return localStorage.getItem('jwtToken');
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRoles() && this.getToken();
  }

  public isAdmin(){
    const roles:any[] = this.getRoles();
   return roles[0].roleName === 'Admin';

  }

  public isUser(){
    const roles:any[] = this.getRoles();
   return roles[0].roleName === 'User';
   
  }

}
