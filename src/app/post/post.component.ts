import {Component,OnInit,} from '@angular/core';
import{PostService} from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],

})
export class PostComponent implements OnInit {
  public loading: boolean = true;

  constructor(public postService: PostService){}

  ngOnInit(): void {
    this.postService.fetchPosts().subscribe(()=>{
      this.loading = false;///data is loaded
    });
  }

  removePost(id: number) {
    console.log(id);
    this.postService.removePost(id);
  }

}
