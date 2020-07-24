import { Component, ViewChild, ViewChildren } from "@angular/core";
import { menuInter } from "./components/scroll-tab/scroll-tab.component";
import { ImageSlider, SwiperComponent } from "./components/swiper/swiper.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild(SwiperComponent) swiperComponent: SwiperComponent;
  title = "ng-app";
  selectId = -1;
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
  sliders: ImageSlider[] = [
    {
      imgUrl:
        "http://t9.baidu.com/it/u=583874135,70653437&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596104050&t=efebfc9aa70f4792ca4fd46244e87959",
      link: "https://baidu.com",
    },
    {
      imgUrl:
        "http://t9.baidu.com/it/u=583874135,70653437&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596104050&t=efebfc9aa70f4792ca4fd46244e87959",
      link: "https://baidu.com",
    },
  ];
  // 脏值检测
  ngDoCheck(): void {
    console.log("父组件,脏值检测");
  }
  tabSelected(index) {
    console.log(index);
    this.selectId = index;
  }
  /**
   * 组件包括所有的子组件全部初始化完成
   */
  ngAfterViewInit(): void {
    console.log("父组件全部视图初始化完成", this.swiperComponent);
  }
}
