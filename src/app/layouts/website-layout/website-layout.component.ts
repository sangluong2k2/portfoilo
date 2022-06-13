import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Posts';
import { IUser } from 'src/app/models/User';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-website-layout',
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.css']
})
export class WebsiteLayoutComponent implements OnInit {
  User!: IUser[];
  Post!: IPost[]
  constructor(
    private userServices: UserService,
    private postServices: PostService
    ) { 
    this.showUser()
    this.showPost()
  }

  ngOnInit(): void {
  }
  showUser(){
    this.userServices.getUser().subscribe(data => {this.User = data})
  }
  showPost(){
    this.postServices.getPostsHome().subscribe(data => {
      this.Post = data
    })
  }

}
