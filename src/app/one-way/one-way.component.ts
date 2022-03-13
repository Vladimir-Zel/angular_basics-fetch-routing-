import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent implements OnInit {

  items = ["a", "b", "c", "d"]

  isCollapsed = true;

  constructor() { }

  toggleCollapse () {
    this.isCollapsed = !this.isCollapsed
  }

  ngOnInit(): void {
  }

}
