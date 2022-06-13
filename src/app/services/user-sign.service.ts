import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserType } from '../models/UserSign';

@Injectable({
  providedIn: 'root'
})
export class UserSignService {
  API_URL: string = "http://localhost:3001/"
  constructor(private http: HttpClient) { }
   createUser(users: UserType){
    return this.http.post(`${this.API_URL}usersign`,users)
   }
   signin(user: UserType){
    return this.http.post(`${this.API_URL}login`,user)
   }
   getUsers():Observable<UserType[]>{
    return this.http.get<UserType[]>(`${this.API_URL}users`)
    
  }
  deleteUser(id: number):Observable<UserType>{
    return this.http.delete<UserType>(`${this.API_URL}users/${id}`)
  }
}
