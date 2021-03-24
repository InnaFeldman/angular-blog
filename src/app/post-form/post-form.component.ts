import { Component, OnInit, Output, EventEmitter,ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, AfterViewInit {
  @ViewChild('titleInput') inputRef!: ElementRef;

  @Input() title:string='';
  @Input() text:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    if(this.inputRef){
      this.inputRef.nativeElement.focus();
     }
  }


  // focusTitle(){
  //  //this.inputRef.nativeElement.focus();
  // }

}
