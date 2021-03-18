import {Component,OnInit,} from '@angular/core';
import{PostService} from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],

})
export class PostComponent implements OnInit {

  constructor(public postServise: PostService){}

  ngOnInit(): void { }

  removePost(id: number) {
    this.postServise.removePost(id);
  }

}
