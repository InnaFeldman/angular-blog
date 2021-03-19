import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
 title: string = "";
 body: string = "";

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  addPost(){
    const post: Post = {
      title: this.title,
      body: this.body,
      id: Date.now()
    }
    this.postService.addPost(post);

    this.title = '';
    this.body = '';
  }
}
