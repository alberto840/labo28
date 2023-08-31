import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/modelo/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userService : UsersService = inject(UsersService);
  users: User[] = [];

  ngOnInit(): void {
    console.log("UsersComponent.ngOnInit()");
    this.userService.getUsers().subscribe(users => {console.log(users);
      this.users = users;}
    );
  }
}
