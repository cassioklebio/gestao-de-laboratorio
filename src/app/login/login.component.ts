import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logoMobile = "/assets/img/LogoMobile.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
