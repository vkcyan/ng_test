import { Component, OnInit, NgZone, ViewChild, ElementRef, Renderer2 } from "@angular/core";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  _title = "文字";
  @ViewChild("timeRef", { static: true }) timeRef: ElementRef;
  public get title(): string {
    console.log("脏值检测");
    return this._title;
  }
  constructor(private ngZone: NgZone, private rd2: Renderer2) {}

  ngOnInit() {}
  ngAfterViewChecked(): void {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        console.log("改变");
        this._title = "改变";
        this.rd2.setProperty(this.timeRef.nativeElement, "innerText", formatDate(Date.now(), "HH:mm:ss:SSS", "zh-Hans"));
      }, 1000);
    });
  }
  handleClick() {}
}
