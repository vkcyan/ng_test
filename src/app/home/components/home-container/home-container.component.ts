import { Component, OnInit } from "@angular/core";
import { channel } from "src/app/app.component";
import { ImageSlider } from "src/app/shared/components/swiper/swiper.component";
import { menuInter } from "src/app/shared/components/scroll-tab/scroll-tab.component";

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.scss"],
})
export class HomeContainerComponent implements OnInit {
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
  // 脏值检测
  ngDoCheck(): void {
    // console.log("父组件,脏值检测");
  }
  tabSelected(index) {
    console.log(index);
    this.selectId = index;
  }
}
