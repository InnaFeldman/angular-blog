import {Component,OnInit,} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { delay } from 'rxjs/operators';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import{Post, PostService} from '../services/post.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})

export class PostComponent implements OnInit {
  public loading: boolean = true;
  searchString: string = "";

  constructor(public postService: PostService, private dialog:MatDialog){}

  ngOnInit(): void {
    this.postService.fetchPosts()
    .pipe(delay(500))
    .subscribe(()=>{
      this.loading = false;///data is loaded
    });
  }

  removePost(id: number) {
    //console.log(id);
    this.postService.removePost(id);
  }

  editPost(post: Post){
    let clonePost = _.cloneDeep(post);
    const index = this.postService.posts.indexOf(post);

    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data: clonePost
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.postService.updatedPost(index, result);
      }
    })
    //console.log(index);
  }

}
