import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../service/post.service';
import { Router } from '@angular/router';
import { DettagliComponent } from '../dettagli/dettagli.component';

@Component({
    selector: 'app-post-attivi',
    templateUrl: './post-attivi.component.html',
    styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

    posts: Post[] = []
    id!: number;


    @Input() identifier!: number;

    constructor(private postSrv: PostService, private router: Router) { }

    ngOnInit(): void {
        this.posts = this.postSrv.getPostFiltrati(true)
    }

    disattiva(id: number) {
        this.postSrv.disattivaDB(id).then(ok => {
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
        this.router.navigate(['/post/attivi', id])
        this.posts = [];
        this.id = id;
        // this.id.emit(id);
        // this.posts = this.posts.filter(e => (e.id == id));
    }
}
