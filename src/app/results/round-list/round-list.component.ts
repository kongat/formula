import { Component, Input, OnInit } from '@angular/core';
import { Race } from 'src/app/common/models/race';

@Component({
  selector: 'app-round-list',
  templateUrl: './round-list.component.html',
  styleUrls: ['./round-list.component.scss']
})
export class RoundListComponent implements OnInit {
  @Input() races: Race[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
