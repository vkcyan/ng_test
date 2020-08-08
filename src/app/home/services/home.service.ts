import { Injectable } from "@angular/core";
import { menuInter } from "src/app/shared/components/scroll-tab/scroll-tab.component";
import { channel } from "src/app/app.component";
import { ImageSlider } from "src/app/shared/components/swiper/swiper.component";
import { HomeModule } from "../home.module";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  private tabs: menuInter[] = [
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
  private sliders: ImageSlider[] = [
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
  private channels: channel[] = [
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
  getMenu() {
    return this.tabs;
  }
  getsliders() {
    return this.sliders;
  }
  getchannels() {
    return this.channels;
  }
}
