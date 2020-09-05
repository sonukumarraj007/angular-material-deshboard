import { DeshboardComponent } from './../../modules/deshboard/deshboard.component';
import { CustomMaterialModule } from 'src/app//custom.material.module';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPostComponent } from './../../modules/add-post/add-post.component';
import { AddCommentComponent } from './../../modules/add-comment/add-comment.component';

// Forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddCommentComponent,
    AddPostComponent,
    AdminComponent,
    DeshboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class AdminModule { }
