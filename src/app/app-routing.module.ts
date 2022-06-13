import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { AddComponent } from './pages/admin/PostsAdmin/add/add.component';
import { PostComponent } from './pages/admin/PostsAdmin/post/post.component';
import { ProjectComponent } from './pages/admin/ProjectAdmin/project/project.component';
import { UserComponent } from './pages/admin/UserAdmin/user/user.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { WorkComponent } from './pages/work/work.component';
import { GuardGuard } from './services/guard/guard.guard';

const routes: Routes = [
  {path: "", component: WebsiteLayoutComponent},
  {path: "admin", component: AdminLayoutComponent, children: [
    {path: "post", component: PostComponent, children: [
      {path: "add", component: AddComponent}
    ]},
    {path: "project", component: ProjectComponent},
    {path: "user", component: UserComponent}
  ]},
  {path: "blog", component: BlogComponent},
  {path: "work", component: WorkComponent},
  {path: "signin", component: SigninComponent},
  {path: "signup", component: SignupComponent},
  {path: "**", component:WebsiteLayoutComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
