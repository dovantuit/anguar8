import { Component, OnInit } from "@angular/core";
import { Product } from "../../app/entities/product.entity";

@Component({
  selector: "app-root", // bằng cách gọi selector 'app-root' , chúng ta đang nói rằng chúng ta muốn trỏ tương ứng đến tag <app-root></app-root> trong html
  templateUrl: "./app1.component.html",
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
  title = "Tzeerror";
  products: Product[];

  constructor() {} //Contructor lớp cha sẽ được sử dụng nếu lớp con kế thừa không có, điều này có nghĩa là contructor con sẽ kế thừa tất cả các đặc tính của contructor cha.

  ngOnInit() {
    // gán các phần tử trong list products
    this.products = [
      {
        id: "001",
        name: "Iphone X",
        photo: "p1.png",
        price: 1000,
        quantity: 0
      },
      {
        id: "002",
        name: "samsung note 10",
        photo: "p2.png",
        price: 2000,
        quantity: 3
      },
      {
        id: "003",
        name: "samsung note 10",
        photo: "p2.png",
        price: 2000,
        quantity: 243254
      },
      {
        id: "004",
        name: "samsung note 10",
        photo: "p2.png",
        price: 2000,
        quantity: 254
      },
      {
        id: "005",
        name: "samsung note 10",
        photo: "p2.png",
        price: 2000,
        quantity: 27867
      }
    ];
  }
  // khai báo sự kiện sayHello
  sayHello(event: any) {
    alert("hello");
  }

  onKey(event: any) {
    // without type info
    // do something with event param
    console.log(event); // hiển thị event
    console.log((<HTMLInputElement>event.target).value); // hiện thị kí tự nhập vào keyboard
  }

  value = "";
  onEnter(event) {
    // do something
    this.value = event.target.value;
    console.log(this.value); // hiển thị giá trị của biến [value] sau khi ấn "enter"
  }

  tenFile = "";
  handleFileInput(files: FileList) {
    this.tenFile = files.item(0).name;
  }
}
