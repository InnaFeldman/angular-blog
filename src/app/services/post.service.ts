import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Post {
  title: string,
  body: string,
  id?: number
}
@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts: Post [] = [];

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=3')///fetch data from external database
    .pipe(tap(posts => this.posts = posts)) /// Saving data in array
  }

  removePost(id: number){
    console.log(id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
