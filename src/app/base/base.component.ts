import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  img = 'https://njitdev.hackerudev.com/app/uploads/group_886.png';
  img_2 = 'https://njitdev.hackerudev.com/app/uploads/group_886.png';
  myInputValue:string = '';
  arr = [1, 1, 2, 3, 5, 8, 13];
  obj = [
    {title: 'Post 1', autor: "inna", comments: [
      {name: "Max", text:'Lorem 1'},
      {name: "Max", text:'Lorem 2'},
      {name: "Max", text:'Lorem 3'},
    ]},
    {title: 'Post 1', autor: "inna 2", comments: [
      {name: "Max 2", text:'Lorem 1'},
      {name: "Max 2", text:'Lorem 2'},
      {name: "Max 2", text:'Lorem 3'},
    ]}
  ];

  now:Date = new Date();

  backgroundToggle = false;
  displayToggle = true;
  toggle = true;
  flag:any = true;

  constructor() {
    setTimeout(()=>{
      this.img = 'https://njitdev.hackerudev.com/app/uploads/Group-611.svg';
    }, 5000)
  }

  ngOnInit(): void {
  }

}
