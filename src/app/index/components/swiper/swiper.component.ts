import { Component, OnInit, Input, ViewChildren, ViewChild, ElementRef, QueryList, Renderer2 } from "@angular/core";
import { viewClassName } from "@angular/compiler";

export interface ImageSlider {
  imgUrl: string;
  link: string;
}

@Component({
  selector: "app-swiper",
  templateUrl: "./swiper.component.html",
  styleUrls: ["./swiper.component.scss"],
})
export class SwiperComponent implements OnInit {
  @Input() sliders: ImageSlider[] = [];
  // 获取dom的方式
  @ViewChild("imgSlider", { static: true }) imgSlider: ElementRef; // static为静态元素 如果为if for里面就是静态的
  @ViewChildren("img") swiperImg: QueryList<ElementRef>;
  constructor(private rd2: Renderer2) {}

  ngOnInit() {
    // this.imgSlider.nativeElement.innerHTML = "111111";
    console.log("轮播图初始化", this.imgSlider);
  }
  ngAfterViewInit(): void {
    // dom初始化的时候获取dom更加合理
    console.log("单个轮播图", this.swiperImg);
    this.swiperImg.map((e) => {
      // e.nativeElement.style.height = "100px";
      // 使用rd2进行dom的操作相对于直接修改dom是更加安全的,这是恩家推荐的的写法
      this.rd2.setStyle(e.nativeElement, "height", "100px");
    });
  }
}
1;
