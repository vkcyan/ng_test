import { Component, OnInit } from "@angular/core";

import { menuInter } from "src/app/shared/components/scroll-tab/scroll-tab.component";
import { Router } from "@angular/router";
import { HomeService } from "../../services/home.service";

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.scss"],
})
export class HomeContainerComponent implements OnInit {
  constructor(private router: Router, private service: HomeService) {}
  selectId = -1;
  tabs: menuInter[] = [];
  ngOnInit(): void {
    this.tabs = this.service.getMenu();
  }
  // 脏值检测
  ngDoCheck(): void {
    // console.log("父组件,脏值检测");
  }
  tabSelected(index) {
    this.selectId = index;
    this.router.navigate(["home", this.tabs[index].link], { queryParams: { aaa: 11 } });
  }
}
