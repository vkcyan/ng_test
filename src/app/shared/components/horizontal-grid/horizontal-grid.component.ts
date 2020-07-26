import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-horizontal-grid",
  templateUrl: "./horizontal-grid.component.html",
  styleUrls: ["./horizontal-grid.component.css"],
})
export class HorizontalGridComponent implements OnInit {
  @Input() username: string = "";
  @Output() usernameChange = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  // public get username(): string {
  //   return this._username;
  // }
  // public set username(value: string) {
  //   this._username = value;
  // }
  changeUserName(ev) {
    console.log(ev);
  }
  modelUserName(value: string): void {
    this.usernameChange.emit(value);
  }
}
