import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: User[] = [];
    selectedUser?: User;

    constructor(private userSrv: UserService) { }

    ngOnInit(): void {
        this.users = this.userSrv.getUsers();
        console.log("INIT", this.users);
    }

    onSelect(user: User): void {
        this.selectedUser = user;
      }

}
