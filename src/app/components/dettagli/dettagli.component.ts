import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../service/post.service';

@Component({
    selector: 'app-dettagli',
    templateUrl: './dettagli.component.html',
    styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent implements OnInit {

    @Input() p!: Post
    @Input() currentId!: number;

    constructor() { }

    ngOnInit(): void {
    }

}
