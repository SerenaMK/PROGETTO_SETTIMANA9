import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    users: User[] = [];

    constructor() { }

    private getAllUsers() {
        return fetch("http://localhost:3000/users/").then((res): Promise<User[]> => res.json())
    }

    fetchUsersData() {
        let u = this.getAllUsers()
        u.then(res => {
            this.users = res;
            this.getUsers();
        })
    }

    getUsers(): User[] {
        let newArray = this.users;
        return newArray
    }
}
