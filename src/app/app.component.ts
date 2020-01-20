import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // document.querySelector('app-root');<app-root></app-root>
  // templateUrl: './app.component.html',
  template : `
  <div [ngStyle]="{background:'green'}">
    <h2 [ngStyle]="{color:'yellow'}">Hello from Parent component</h2>
    <h1 [style.color]="textColor" [style.background]="backgroundColor"
    (mouseover)="onTextMouseOver()"
    (mouseout)="onTextMouseOut()"
    >{{title}}</h1>
    <!-- <h1 [ngStyle]="{color: textColor,background:backgroundColor}">{{title}}</h1> -->
    <h1 [ngClass]="{ 'with-border': withBorder, 'other-class': true }">{{title}}</h1>
    <img src={{imageSrc}}>
    <!-- <img [src]="imageSrc"> -->
    <br>
    <!-- <button (click)="onButtonClick()">hired border</button> -->
    <button (click)="onButtonClick()">{{withBorder ? 'Hide' : 'Show'}} border</button>
  </div>

  <app-hi [text]="title" (buttonClicked)="onButtonClickedFromHello($event)"></app-hi>
  <app-ok></app-ok>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'title updated from parent'; // PropertyBinding
  imageSrc = 'https://picsum.photos/200'; // PropertyBinding

  textColor = 'tomato';
  backgroundColor = 'green';
  withBorder = true;

  onButtonClickedFromHello(event : string) {
    console.log({event}, 'clicked from hello');
    this.title = event;
  }
  onButtonClick() {
    console.log('button clicked');
    this.withBorder = !this.withBorder;
  }
  onTextMouseOver() {
    this.textColor = 'dodgerblue';
  }
  onTextMouseOut() {
    this.textColor = 'yellow';
  }
}
