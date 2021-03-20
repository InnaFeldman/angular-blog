import { Pipe, PipeTransform } from '@angular/core';
import {Post, PostService} from '../services/post.service'

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = ""): Post[] {
    if(!search.trim()){ ///if search is empty, return all posts
      return posts;
    }
    return posts.filter(post => { //if in search there is something in search we need to filter it
      return post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      ///indexOf == -1 in case that nothing is found
    })
  }

}
