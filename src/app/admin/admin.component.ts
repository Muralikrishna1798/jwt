import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  messsage: any;
  constructor(private userServ: UserService) {}

  ngOnInit(): void {
    this.forAdmin();
  }
  forAdmin() {
    this.userServ.forAdmin().subscribe(
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
