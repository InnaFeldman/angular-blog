import { Component, OnInit, Output, EventEmitter,ViewChild, ElementRef } from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput', {static: true}) inputRef!:ElementRef;

  title:string='';
  text:string = '';

  constructor() { }

  ngOnInit(): void {
    this.inputRef.nativeElement.focus();
  }

  addPost(){
    if(this.text.trim() && this.title.trim()){
      const post: Post = {
        title: this.title,
        text: this.text
      }

      ///Метод emit мы вызиваем тогда, когда хотим отправить данные наружу
      /// где в качестве аргумента мы передаем обьект post сосздан. выше (const post)
      this.onAdd.emit(post);

      //console.log("New Post", post);
      this.title = this.text = '';
    }
  }

  // focusTitle(){
  //  //this.inputRef.nativeElement.focus();
  // }

}
