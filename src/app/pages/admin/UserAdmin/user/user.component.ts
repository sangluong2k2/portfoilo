import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/app/models/UserSign';
import { UserSignService } from 'src/app/services/user-sign.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Users!: UserType[] | any[]
  constructor(private usersServices: UserSignService) { }

  ngOnInit(): void {
    this.showUsers()
  }
  showUsers() {
    this.usersServices.getUsers().subscribe(data => {
      this.Users = data
    })
  }
  onRemove(id: number) {
    this.usersServices.deleteUser(id).subscribe(() => {
      this.Users = this.Users.filter(item => item.id !== id)
    })
  }
}
