import { Component, OnInit } from '@angular/core';
import { PostService } from './service/post.service';
import { UserService } from './service/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Routing';
    constructor(private postSrv: PostService, private userSrv: UserService) { }
    ngOnInit(): void {
        this.postSrv.fetchPostsData();
        this.userSrv.fetchUsersData();
    }
}
