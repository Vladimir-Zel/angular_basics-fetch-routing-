import { Component, OnInit } from '@angular/core';
import {transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  items = ["Angular", "React", "Vue", "Bootstrap", "Node.js", "React-Native"]

  loggedIn = true;

  constructor() { }

  ngOnInit(): void {
  }

}
