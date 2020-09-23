import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-solidbinary',
  templateUrl: './solidbinary.component.html',
  styleUrls: ['./solidbinary.component.css']
})
export class SolidbinaryComponent implements OnInit {
users;
   constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(res => res.json())
      .subscribe(res => {      
        this.users = res})
  }

  ngOnInit() {
  }

}