import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService) { }

  people: any;

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.data.getPeople().subscribe(data => {
      this.people = data;
    })
  }

  removePerson(_person) {
    this.data.deletePerson(_person.id).subscribe(_data => {
      this.getPeople();
    })
  }
}
