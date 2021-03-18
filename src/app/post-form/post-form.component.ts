import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  //@Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }
}
