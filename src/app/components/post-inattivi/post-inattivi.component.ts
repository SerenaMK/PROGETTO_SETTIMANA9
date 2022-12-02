import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../service/post.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post-inattivi',
    templateUrl: './post-inattivi.component.html',
    styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

    posts: Post[] = [];
    id!: number;

    @Input() identifier!: number;

    constructor(private postSrv: PostService, private router: Router) { }

    ngOnInit(): void {
        this.posts = this.postSrv.getPostFiltrati(false)
    }

    attiva(id: number) {
        this.postSrv.attivaDB(id).then(ok => {
            if (ok) this.posts = this.posts.filter(e => !(e.id == id))
            else console.log("ERRORE");
        })
    }

    elim(id: number) {
        this.postSrv.eliminaDB(id).then(ok => {
            if (ok) this.posts = this.posts.filter(e => !(e.id == id))
            else console.log("ERRORE");
        })
    }

    detail(id: number) {
        this.router.navigate(['/post/inattivi', id])
        this.posts = [];
        this.id = id;
    }
}
