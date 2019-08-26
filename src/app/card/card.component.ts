import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() person: string;
  @Output() deletePerson = new EventEmitter;
  
  constructor(
    private router: Router
  ) { }

  editPerson(_person) {
    this.router.navigate(['/edit', _person])
  }

  ngOnInit() {
  }

}
