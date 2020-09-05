import { CustomMaterialModule } from 'src/app//custom.material.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { HomeComponent } from "../../modules/home/home.component";
import { PostsComponent } from "../../modules/posts/posts.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

// Forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    PostsComponent],
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
export class DefaultModule { }
