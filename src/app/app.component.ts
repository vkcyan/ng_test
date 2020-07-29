import { Component, ViewChild } from "@angular/core";
import { SwiperComponent } from "./shared/components/swiper/swiper.component";

export interface channel {
  id: string;
  icon: string;
  title: string;
  link: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  @ViewChild(SwiperComponent) swiperComponent: SwiperComponent;
  title = "ng-app";
  /**
   * 组件包括所有的子组件全部初始化完成
   */
  ngAfterViewInit(): void {
    console.log("父组件全部视图初始化完成", this.swiperComponent);
  }
}
