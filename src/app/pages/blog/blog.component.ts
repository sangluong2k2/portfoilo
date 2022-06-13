import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Posts';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  PostList!: IPost
  constructor(private postServices: PostService) { }

  ngOnInit(): void {
    this.showPost()
  }

  showPost(){
    this.postServices.getPosts().subscribe(data => {
      this.postServices
    })
  }

}
