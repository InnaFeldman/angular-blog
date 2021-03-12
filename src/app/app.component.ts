import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post [] = [
    {title: 'Want to learn Angular component',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, ipsum',
      id: 1
    },
    // {title: 'Next block ',
    //   text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, ipsum 2222',
    //   id: 2
    // }
  ]

  updatePosts(post:Post){
    //добавляем в массив первые елемент, начало списка
    this.posts.unshift(post);
    console.log('Post', post)
  }
}
