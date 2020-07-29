import { Directive, ElementRef, Renderer2, Output, Input, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appGridItemImage]",
})
export class GridItemImageDirective {
  @Input() imageSize = "1rem";
  @HostBinding("style.grid-area") gridArea = "image";
  @HostBinding("style.width") get width() {
    return this.imageSize;
  }
  @HostBinding("style.height") get height() {
    return this.imageSize;
  }
  @HostListener("click", ["$event.target"])
  handleClick(event: Element) {
    console.log(event);
  }
}
