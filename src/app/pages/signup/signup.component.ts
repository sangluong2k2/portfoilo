import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from 'src/app/models/UserSign';
import { UserSignService } from 'src/app/services/user-sign.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  User: UserType = {
    name: "",
    email: "",
    password: ""
  }
    constructor(private userService: UserSignService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userService.createUser(this.User).subscribe(data => {
      this.router.navigate(['signin'])
    })
  }

}
