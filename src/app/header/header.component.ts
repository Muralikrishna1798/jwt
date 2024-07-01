import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { CommonModule, NgIf } from '@angular/common';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  isButtonVisible: boolean = false;
   constructor(private userAuthService: UserAuthService,
    private router: Router, public userService: UserService
   ){}

   ngOnInit():void{
    
   }

   public isLoggedIn (){
    this.isButtonVisible = !this.isButtonVisible;
    return this.userAuthService.isLoggedIn();
   }

   public logout(){
    console.log(this.isButtonVisible)
    this.isButtonVisible = this.isButtonVisible;
    this.userAuthService.clear();
    this.router.navigate(['/home']);
    
   }
}
