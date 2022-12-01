import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {


    @Input() p!: Post;
    @Output() id = new EventEmitter<number>();
    @Output() detailId = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

    showDetail(id: number) {
        this.detailId.emit(id);
    }

    elimina(id: number) {
        this.id.emit(id);
    }
}
