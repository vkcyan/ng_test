import { Component, OnInit, inject, Inject } from "@angular/core";
import { channel } from "src/app/app.component";
import { ImageSlider } from "src/app/shared/components/swiper/swiper.component";
import { ActivatedRoute } from "@angular/router";
import { HomeService } from "../../services/home.service";
import { token } from "../../home.module";
@Component({
  selector: "app-home-detail",
  templateUrl: "./home-detail.component.html",
  styleUrls: ["./home-detail.component.scss"],
})
export class HomeDetailComponent implements OnInit {
  // token 作为唯一表示的字符串拿过来给我set进去
  constructor(private router: ActivatedRoute, private service: HomeService, @Inject(token) private baseUrl: string) {}
  tablink: string = "11";
  sliders: ImageSlider[] = [];
  channels: channel[] = [];
  ngOnInit(): void {
    this.sliders = this.service.getsliders();
    this.channels = this.service.getchannels();
    console.log("依赖注入", this.baseUrl);

    let tabLink = this.router.snapshot.paramMap.get("tabLink");
    console.log("获取到的参数", tabLink);

    this.router.paramMap.subscribe((params) => {
      console.log(params);
      this.tablink = params.get("tabLink");
    });
    this.router.queryParamMap.subscribe((params) => {
      console.log(params);
    });
  }
}
