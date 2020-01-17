import { Component, OnInit } from "@angular/core";
import { Product } from "../../app/entities/product.entity";

@Component({
  selector: "app-root",
  templateUrl: "./app1.component.html"
  // styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
  title = "Tzeerror";
  products: Product[];

  constructor() {}

  ngOnInit() {
    
    // gán các phần tử trong list products
    this.products = [
      {
        id: "001",
        name: "Iphone X",
        photo: "p1.png",
        price: 1000,
        quantity: 1
      },
      {
        id: "002",
        name: "samsung note 10",
        photo: "p2.png",
        price: 2000,
        quantity: 2
      }
    ];
  }
  // khai báo sự kiện sayHello
  sayHello(event: any) {
    alert("hello");
  }
}
