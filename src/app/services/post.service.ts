import { Injectable } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  public posts: Post [] = [
    {title: 'Want to learn Angular component',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, ipsum',
      id: 1
    },
    {title: 'Next block ',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, ipsum 2222',
      id: 2
    }
  ];

  constructor() { }

  removePost(id: number){
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
