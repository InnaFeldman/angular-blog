import { Pipe, PipeTransform } from '@angular/core';
import {Post, PostService} from '../services/post.service'

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = ""): Post[] {
    if(!search.trim()){
      return posts;
    }
    return posts.filter(post => {
      return post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  }

}
