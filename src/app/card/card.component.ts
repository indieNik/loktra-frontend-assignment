import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() person: string;
  @Output() deletePerson = new EventEmitter;
  
  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
