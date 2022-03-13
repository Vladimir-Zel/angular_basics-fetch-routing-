import {Component} from '@angular/core';
import {NewServiceService} from "./new-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';
  response: any;
  userId: string = '';

  constructor(private http: HttpClient) {

  }

  search() {
    this.http.get('https://rickandmortyapi.com/api/character/' + this.userId)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }
}
