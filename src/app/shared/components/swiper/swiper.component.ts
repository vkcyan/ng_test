import { Component, OnInit, Input, ViewChildren, ViewChild, ElementRef, QueryList, Renderer2 } from "@angular/core";

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
  @ViewChild("imgSlider", { static: true }) imgSlider: ElementRef; // static为静态元素 如果为if for里面就是静态的
  @ViewChildren("img") swiperImg: QueryList<ElementRef>;
  constructor(private rd2: Renderer2) {}
  public swiperIndex: number = 0; // 轮播图下标
  private setintId;
  ngOnInit() {}
  ngAfterViewInit(): void {
    let i = 0;
    this.setintId = setInterval(() => {
      let sliderDom = this.imgSlider.nativeElement;
      this.rd2.setProperty(sliderDom, "scrollLeft", (this.swiperIndex * sliderDom.scrollWidth) / this.sliders.length);
      if (this.swiperIndex >= this.sliders.length - 1) {
        this.swiperIndex = 0;
      } else {
        this.swiperIndex++;
      }
    }, 2000);
  }
  ngOnDestroy(): void {
    clearInterval(this.setintId);
  }
  handerScroll(e) {
    // console.log(e);
  }
}
1;
