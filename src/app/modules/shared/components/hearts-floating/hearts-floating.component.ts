import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hearts-floating',
  templateUrl: './hearts-floating.component.html',
  styleUrls: ['./hearts-floating.component.scss']
})
export class HeartsFloatingComponent implements OnInit {
  hearts:number[]=new Array(10);
  constructor() { }

  ngOnInit(): void {
  }

}
