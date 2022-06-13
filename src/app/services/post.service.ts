import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL: string = "http://localhost:3001/posts"
  constructor(private http: HttpClient) { }
  getPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>(`${this.API_URL}?_expand=categoryPost`)
  }
  getPostsHome():Observable<IPost[]>{
    return this.http.get<IPost[]>(`${this.API_URL}?_expand=categoryPost&_limit=2`)
  }
  getPost(id:number):Observable<IPost>{
    return this.http.get<IPost>(`${this.API_URL}/${id}?_expand=categoryPost`)
  }
  addPost(post: IPost):Observable<IPost>{
    return this.http.post<IPost>(`${this.API_URL}`,post)
  }
  editPost(post: IPost):Observable<IPost>{
    return this.http.put<IPost>(`${this.API_URL}/${post.id}`,post)
  }
  deletePost(id: number):Observable<IPost>{
    return this.http.delete<IPost>(`${this.API_URL}/${id}`)
  }
}
