import { Component, Inject, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Post} from '../services/post.service'


@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public post: Post
    ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  onFormSubmit(form: NgForm){
    const updatedPost = {
      ...this.post,
      ...form.value
    }
    this.dialogRef.close(updatedPost);
  }

}
