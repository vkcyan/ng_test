import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

export interface channel {
  id: string;
  icon: string;
  title: string;
  link: string;
}
@Component({
  selector: "app-horizontal-grid",
  templateUrl: "./horizontal-grid.component.html",
  styleUrls: ["./horizontal-grid.component.css"],
})
export class HorizontalGridComponent implements OnInit {
  channels: channel[] = [
    {
      id: "",
      icon: "https://images.591wsh.com/2020/07/07/22818688107286528.png",
      title: "第一",
      link: "11",
    },
    {
      id: "",
      icon: "https://images.591wsh.com/2020/07/07/22818688107286528.png",
      title: "第一",
      link: "11",
    },
    {
      id: "",
      icon: "https://images.591wsh.com/2020/07/07/22818688107286528.png",
      title: "第一",
      link: "11",
    },
    {
      id: "",
      icon: "https://images.591wsh.com/2020/07/07/22818688107286528.png",
      title: "第一",
      link: "11",
    },
    {
      id: "",
      icon: "https://images.591wsh.com/2020/07/07/22818688107286528.png",
      title: "第一",
      link: "11",
    },
    {
      id: "",
      icon: "https://images.591wsh.com/2020/07/07/22818688107286528.png",
      title: "第一",
      link: "11",
    },
    {
      id: "",
      icon: "https://images.591wsh.com/2020/07/07/22818688107286528.png",
      title: "第一",
      link: "11",
    },
    {
      id: "",
      icon: "https://images.591wsh.com/2020/07/07/22818688107286528.png",
      title: "第一",
      link: "11",
    },
  ];
  ngOnInit(): void {}
}
