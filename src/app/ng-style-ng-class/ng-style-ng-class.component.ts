import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-ng-class',
  templateUrl: './ng-style-ng-class.component.html',
  styleUrls: ['./ng-style-ng-class.component.css']
})
export class NgStyleNgClassComponent implements OnInit {

  visibility: boolean = true;

  toggle(){
    this.visibility = !this.visibility;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
