import { Component, OnInit } from "@angular/core";

import { menuInter } from "src/app/shared/components/scroll-tab/scroll-tab.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.scss"],
})
export class HomeContainerComponent implements OnInit {
  constructor(private router: Router) {}
  selectId = -1;
  tabs: menuInter[] = [
    {
      title: "热门",
      link: "11",
    },
    {
      title: "男装",
      link: "22",
    },
    {
      title: "手机",
      link: "33",
    },
    {
      title: "热门",
      link: "44",
    },
    {
      title: "男装",
      link: "55",
    },
    {
      title: "手机",
      link: "66",
    },
    {
      title: "热门",
      link: "77",
    },
    {
      title: "男装",
      link: "88",
    },
    {
      title: "手机",
      link: "99",
    },
    {
      title: "热门",
      link: "10",
    },
    {
      title: "男装",
      link: "11",
    },
    {
      title: "手机",
      link: "12",
    },
  ];
  ngOnInit(): void {}
  // 脏值检测
  ngDoCheck(): void {
    // console.log("父组件,脏值检测");
  }
  tabSelected(index) {
    this.selectId = index;
    this.router.navigate(["home", this.tabs[index].link], { queryParams: { aaa: 11 } });
  }
}
