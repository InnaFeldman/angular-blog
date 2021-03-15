import { Component } from '@angular/core';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[LocalCounterService]
})
export class AppComponent {

  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
    ){

  }
  // posts: Post [] = [
  //   {title: 'Want to learn Angular component',
  //     text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, ipsum',
  //     id: 1
  //   },
  //   {title: 'Next block ',
  //     text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, ipsum 2222',
  //     id: 2
  //   }
  // ];

  // tmpPost!: Post;


  // updatePosts(post:Post){
  //   //добавляем в массив первые елемент, начало списка
  //   this.posts.unshift(post);
  //   console.log('Post', post)
  // }

  // removePost(id:number){
  //   console.log('Id to', id);
  //   this.posts = this.posts.filter(p => p.id !== id);
  // }

  // postEdit(id:number){
  //   //console.log('Edit id', id)
  //   let edPost = this.posts.find(p => p.id === id);
  //   if(edPost){
  //     this.tmpPost = edPost;
  //   }
  // }
}
