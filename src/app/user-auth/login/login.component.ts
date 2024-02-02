import { Component } from '@angular/core';
import { after } from 'node:test';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  getNames()
  {
    alert("functio")
  }
  getName(name:any, seconame:string)
  {
    alert("san")
    alert("sandeep")
  }

}
