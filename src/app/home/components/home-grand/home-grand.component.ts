import { Component, OnInit, Injectable, Injector, inject, InjectionToken } from "@angular/core";

class Product {
  constructor(private data: string, private color: string) {
    console.log(this.data, this.color);
  }
}
class PurchaseOrder {
  private amount: number;
  constructor(private product: Product) {
    this.amount = 1;
  }
}

@Component({
  selector: "app-home-grand",
  templateUrl: "./home-grand.component.html",
  styleUrls: ["./home-grand.component.scss"],
})
export class HomeGrandComponent implements OnInit {
  constructor() {}
  token = new InjectionToken<string>("baseUrl");
  obj = { aa: 1, bb: 2, cc: 3 };
  date: Date;
  price: number;
  dataSlice = "被切割的";
  ngOnInit() {
    this.date = this.minusDays(new Date(), 2);
    this.price = 123.321;
    const injector = Injector.create({
      providers: [
        {
          provide: PurchaseOrder,
          useClass: PurchaseOrder,
          deps: [Product],
        },
        {
          provide: Product,
          useFactory: () => new Product("大米手机", "黑色"),
          deps: [],
        },
        {
          provide: this.token,
          useValue: "1111111",
        },
      ],
    });
    console.log(injector.get(Product));
  }
  /**
   * 获得当前时间减去时间的天数
   * @param date
   * @param days
   */
  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }
}
