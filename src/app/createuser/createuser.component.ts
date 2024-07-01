import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent {

  constructor(private userService: UserService, private router: Router){}
  createUser = {
    username: '',
    userPassword: '',
    userFirstName: '',
    userLastName: '',
  };

  public login(data:any){
    this.userService.registerNewUser(data.value).subscribe(
      (res) => {
        this.router.navigate(['/home']);
        alert(' User created successfully!')
        console.log('res',res)
      },(error) => {
        this.router.navigate(['/home']);
        alert(' An error occurred while creating the user')
        console.log(error);
      }
    )
console.log(data.value)
  }
}
