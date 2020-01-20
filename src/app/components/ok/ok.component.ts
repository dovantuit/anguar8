import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ok',
  template: `
  <div [ngStyle]="{background:'orange'}">
  <h2 [ngStyle]="{color:'yellow'}">Hello from ok component</h2>
  <p>{{textFromHello}} in ok component!</p>
  </div>
  `,
})
export class OkComponent implements OnInit {
  textFromHello: string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  this._dataService.textFromHello$.subscribe(text => this.textFromHello = text);
  }

}
