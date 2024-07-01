import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  messsage: any;
  constructor(private userServ: UserService) {}

  ngOnInit(): void {
    this.forUser();
  }

  forUser() {
    this.userServ.forUser().subscribe(
      (res) => {
        console.log(res);
        this.messsage = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
}
