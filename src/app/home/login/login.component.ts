import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  // This represents models
  user = '';
  password = '';

  constructor(
    private readonly authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.Autheticate(this.user, this.password).subscribe(() => {
      console.log("authenticated successfully!")
    }, (error) => {
      alert("User or password is not valid!")
      console.log(error)
    }
    );
  }
}
