import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { BaseComponent } from './base/base.component';
import { PostFormComponent } from './post-form/post-form.component';
import {StyleDirective} from './directives/style.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    BaseComponent,
    PostFormComponent,
    StyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
