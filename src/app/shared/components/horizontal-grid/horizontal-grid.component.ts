import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-horizontal-grid",
  templateUrl: "./horizontal-grid.component.html",
  styleUrls: ["./horizontal-grid.component.scss"],
})
export class HorizontalGridComponent implements OnInit {
  @Input() cols = 7;
  @Input() displayCols = 5;
  sliderMargin = `0 0`;
  ngOnInit(): void {}
  get scrollable(): boolean {
    return this.cols > this.displayCols;
  }
  get templateRows(): string {
    return "minmax(auto, max-content)";
  }
  get templateolums(): string {
    return `repeat(${this.cols},calc((100vw - ${this.displayCols + 0.4}rem)/${this.displayCols}))`;
  }
  handScroll(event) {
    this.sliderMargin = `0 ${(100 * event.target.scrollLeft) / event.target.scrollWidth}%`;
  }
}
