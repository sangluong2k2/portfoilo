import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from 'src/app/models/UserSign';
import { UserSignService } from 'src/app/services/user-sign.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  User: UserType={
    email: "",
    password: "",
  }
  constructor(private userService: UserSignService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userService.signin(this.User).subscribe(data => {
      localStorage.setItem('user', JSON.stringify(data))
      this.router.navigate(['/admin'])
    })
  }
}
