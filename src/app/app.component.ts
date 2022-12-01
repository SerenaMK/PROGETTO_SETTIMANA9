import { Component, OnInit } from '@angular/core';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Routing';
  constructor(private postSrv: PostService){}
  ngOnInit(): void {
    this.postSrv.fetchData()
  }
}
