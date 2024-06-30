import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, 
    private userAuthService:UserAuthService,
    private router: Router){}
  ngOnInit():void{

  }
  
  login(data:NgForm){
 this.userService.login(data.value).subscribe(
  (res:any)=>{
    res.jwtToken
    this.userAuthService.setRoles(res.user.role);
    this.userAuthService.setToken(res.jwtToken);
 const role = res.user.role[0].roleName;
    if(role === 'Admin'){
      this.router.navigate(['/admin']);
    }
    else{
      this.router.navigate(['/user']);

    }
  },
  (error) => {
    console.log(error);
  }
 );

  }
}
