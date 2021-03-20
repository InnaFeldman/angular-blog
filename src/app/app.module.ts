import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { BaseComponent } from './base/base.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostFilterPipe } from './pipes/post-filter.pipe';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    BaseComponent,
    PostFormComponent,
    PostFilterPipe,
    EditTodoDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
