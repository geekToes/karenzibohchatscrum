import { Component, OnInit } from '@angular/core';
import {Scrumuser} from '../scrumuser';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userTypes = ['regular user', 'project owner'];
  scrumUserModel = new Scrumuser('','','','');

}
