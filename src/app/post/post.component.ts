import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  OnDestroy,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation } from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None //add global style without data attribute
})
export class PostComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
OnDestroy {
  @Input() post!: Post; /// Я ожидаю отправленные данные, которые я сохраню в значении свойства post
  @Output() onRemove = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<number>();
  @Output() onSave = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef!: ElementRef ///Доступ до контента

  toggle: boolean = false;
  dataStore: Post[] = [];
  constructor() { }

  removePost(){
    this.onRemove.emit(this.post.id)
  }

  editPost(){
    this.toggle = !this.toggle;

    this.onEdit.emit(this.post.id)
  }

  close(){
    this.toggle = !this.toggle;
  }

  save(){
    //this.dataStore = JSON.parse(JSON.stringify(this.post));
    //console.log('dataStore',  this.dataStore)
  }

  ngOnInit(): void {///hook
    //console.log(this.infoRef.nativeElement)
    //console.log('ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges):void {///hook
    //console.log('Onchanges', changes)
  }

  ngDoCheck(){///hook
    //console.log('ngDoCheck')
  }

  ngAfterContentInit(){///hook
    //console.log('ngAfterContentInit')
  }

  ngOnDestroy(){
    //console.log('ngOnDestroy')
  }

}
