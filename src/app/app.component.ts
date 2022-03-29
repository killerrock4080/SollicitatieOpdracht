import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public responsedata?: Task[];
  let clicked = false;

  constructor(http: HttpClient) {
    http.get<Task[]>('https://jsonplaceholder.typicode.com/posts').subscribe(result => {
      this.responsedata = result;
      console.log(result);
    }, error => console.error(error));
  }

  title = 'SollicitatieOpdracht';
}


loadDetails(http: HttpClient, id){
  http.get<Task[]>('https://jsonplaceholder.typicode.com/posts/{{id}}/comments').subscribe(result => {
    this.responsedata = result;
    console.log(result);
  }, error => console.error(error));
}

interface Task {
  userid: number;
  id: number;
  title: string;
  body: string;
}
