import { Component } from '@angular/core';
import { LoginForm } from '../login-form/login-form';


@Component({
  selector: 'app-header',
  imports: [LoginForm],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
