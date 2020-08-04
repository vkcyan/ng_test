import { Component, OnInit } from "@angular/core";
import { channel } from "src/app/app.component";
import { ImageSlider } from "src/app/shared/components/swiper/swiper.component";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-home-detail",
  templateUrl: "./home-detail.component.html",
  styleUrls: ["./home-detail.component.scss"],
})
export class HomeDetailComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  tablink: string = "11";
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
  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      console.log(params);
      this.tablink = params.get("tabLink");
    });
    this.router.queryParamMap.subscribe((params) => {
      console.log(params);
    });
  }
}
