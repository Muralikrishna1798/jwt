import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,MatInputModule,MatFormFieldModule,MatButtonModule],
  providers: [HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  user = {
    username: '',
    password: '',
  };

  login(form: any) {
    this.userService.login(form.value).subscribe(
      (res: any) => {
        this.userAuthService.setRoles(res.user.role);
        this.userAuthService.setToken(res.jwtToken);
        const role = res.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      (error) => {
        // this.router.navigate(['/home'])
        alert( error.error.error)
        // console.log(error.error.error);
      }
    );
  }
}
