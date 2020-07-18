import { Component } from "@angular/core";
import { menuInter } from "./components/scroll-tab/scroll-tab.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ng-app";
  tabs: menuInter[] = [
    {
      title: "热门",
      link: "#",
    },
    {
      title: "男装",
      link: "#",
    },
    {
      title: "手机",
      link: "#",
    },
    {
      title: "热门",
      link: "#",
    },
    {
      title: "男装",
      link: "#",
    },
    {
      title: "手机",
      link: "#",
    },
    {
      title: "热门",
      link: "#",
    },
    {
      title: "男装",
      link: "#",
    },
    {
      title: "手机",
      link: "#",
    },
    {
      title: "热门",
      link: "#",
    },
    {
      title: "男装",
      link: "#",
    },
    {
      title: "手机",
      link: "#",
    },
  ];
  tabSelected(index) {
    console.log(index);
  }
}
