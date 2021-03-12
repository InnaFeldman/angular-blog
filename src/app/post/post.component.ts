import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges,DoCheck, AfterContentInit } from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit {
  @Input() post!: Post; /// Я ожидаю отправленные данные, которые я сохраню в значении свойства post

  @ContentChild('info', {static: true}) infoRef!: ElementRef ///Доступ до контента

  constructor() { }

  ngOnInit(): void {///hook
    //console.log(this.infoRef.nativeElement)
    //console.log('ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges):void {///hook
    console.log('Onchanges', changes)
  }

  ngDoCheck(){///hook
    console.log('ngDoCheck')
  }

  ngAfterContentInit(){///hook
    console.log('ngAfterContentInit')
  }

}
