import { EventEmitter, Component, OnInit, OnChanges, OnDestroy, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked, Input, Output, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hi',
  template: `
  <div [ngStyle]="{background:'brown'}">

    <h2 [ngStyle]="{color:'yellow'}">Hello from hi component</h2>
    <p>{{text}} from parent</p>
    <button (click)="onButtonClicked()">Change</button>
  </div>
  `
})
export class HiComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {

  @Input() text: string; // text nhận từ cha
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  // enject service vao hi component
  constructor(private _dataService: DataService) {

   }// enject


  // funcion
  onButtonClicked() {
    this.text = 'Change from hi component';
    this.buttonClicked.emit(this.text);
    this._dataService.setTextFromHello(this.text);
  }

  ngOnInit(): void { // life cycle hooks
    console.log('Child OnInit ran');
    this._dataService.setTextFromHello(this.text);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Child OnChange ran',{changes});
  }
  ngOnDestroy(): void {
    // console.log('Child Destroy ran');
  }
  ngAfterViewInit(): void {
    // console.log('Child AfterViewInit ran');
  }
  ngAfterContentInit(): void {
    // console.log('Child AfterContentInit ran');
  }
  ngAfterContentChecked(): void {
    // console.log('Child AfterContentChecked ran');
  }
  ngAfterViewChecked(): void {
    // console.log('Child AfterViewChecked ran');
  }
}
