import { Component, OnInit, Input } from "@angular/core";
import { Observable, interval } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

@Component({
  selector: "app-count-down",
  templateUrl: "./count-down.component.html",
  styleUrls: ["./count-down.component.scss"],
})
export class CountDownComponent implements OnInit {
  constructor() {}
  @Input() startDate = new Date();
  @Input() futurDate: Date;
  countDown$: Observable<string>;
  ngOnInit() {
    this.countDown$ = interval(1000).pipe(
      map((data) => this.diffInSec(this.startDate, this.futurDate) - data),
      takeWhile((gap) => gap >= 0), // 如果为真 继续这个流 如果为假 结束这个流 filter 会过滤掉,但是不会结束
      map((data) => ({
        day: Math.floor(data / 3600 / 24),
        hour: Math.floor((data / 3600) % 24),
        minute: Math.floor((data / 60) % 60),
        second: Math.floor(data % 60),
      })),
      map((data) => `${data.hour}:${data.minute}:${data.second}`),
    );
  }

  private diffInSec(start: Date, future: Date) {
    const diff = future.getTime() - start.getTime();
    return Math.floor(diff / 1000);
  }
}
