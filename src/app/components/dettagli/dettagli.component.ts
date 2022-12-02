import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../service/post.service';

@Component({
    selector: 'app-dettagli',
    templateUrl: './dettagli.component.html',
    styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent implements OnInit {

    posts: Post[] = []
    currentPost!: Post | undefined;

    // Ottieni l'id dall'url
    url = window.location.href;
    id = Number(this.url.slice((this.url.indexOf('i/') + 2), this.url.length));

    constructor(private postSrv: PostService) { }

    ngOnInit(): void {
        this.posts = this.postSrv.getPostFiltrati(this.url.includes("inattivi") ? false : true);

        console.log("DETTAGLI id: ", this.getPostUnico());
    }

    getPostUnico(): void {
        this.currentPost = this.posts.find((e) => {
            return e.id == this.id
        })
    }
}
