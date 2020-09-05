import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { AdminComponent } from './layouts/admin/admin.component';
import { HomeComponent } from "./modules/home/home.component";
import { PostsComponent } from "./modules/posts/posts.component";
import { LoginComponent } from "./modules/login/login.component";
import { AddCommentComponent } from './modules/add-comment/add-comment.component';
import { AddPostComponent } from './modules/add-post/add-post.component';
import { FullwidthComponent } from "./layouts/fullwidth/fullwidth.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "posts",
        component: PostsComponent,
      },
    ],
  },
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "add-post",
        component: AddPostComponent,
      },
      {
        path: "add-com",
        component: AddCommentComponent,
      },
    ],
  },
  {
    path: "",
    component: FullwidthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
