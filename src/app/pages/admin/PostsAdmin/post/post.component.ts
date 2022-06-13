import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Posts';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  PostList!: IPost[] | any[]
  constructor(private postServices: PostService) { }

  ngOnInit(): void {
    this.showPost()
  }
  showPost(){
    this.postServices.getPosts().subscribe(data => {
      this.PostList = data
    })
  }
  onRemove(id:number){
    this.postServices.deletePost(id).subscribe(() => {
      this.PostList = this.PostList.filter(item => item.id !== id)
    })
  }
}
