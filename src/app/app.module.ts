import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './pages/blog/blog.component';
import { WorkComponent } from './pages/work/work.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { PostComponent } from './pages/admin/PostsAdmin/post/post.component';
import { ProjectComponent } from './pages/admin/ProjectAdmin/project/project.component';
import { UserComponent } from './pages/admin/UserAdmin/user/user.component';
import { AddComponent } from './pages/admin/PostsAdmin/add/add.component'
@NgModule({
  declarations: [
    AppComponent,
    WebsiteLayoutComponent,
    AdminLayoutComponent,
    BlogComponent,
    WorkComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    PostComponent,
    ProjectComponent,
    UserComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
