import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  startDate = new Date("2020-8-29");
  futurDate = new Date("2020-9-20");
}
