import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-website-layout',
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.css']
})
export class WebsiteLayoutComponent implements OnInit {
  User!: IUser[];
  constructor(private userServices: UserService) { 
    this.showUser()
  }

  ngOnInit(): void {
  }
  showUser(){
    this.userServices.getUser().subscribe(data => {this.User = data})
  }

}
