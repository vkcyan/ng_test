import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Emoji, confirmable } from "../../decorators";

@Component({
  selector: "app-horizontal-grid",
  templateUrl: "./horizontal-grid.component.html",
  styleUrls: ["./horizontal-grid.component.css"],
})
export class HorizontalGridComponent implements OnInit {
  @Input() username: string = "";
  @Output() usernameChange = new EventEmitter();
  @Emoji() emojiData: string = "表情";
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
  @confirmable('您确认要执行嘛')
  modelUserName(value: string): void {
    this.usernameChange.emit(value);
  }
}
