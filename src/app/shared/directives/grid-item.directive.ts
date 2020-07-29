import { Directive, ElementRef, Renderer2, HostBinding } from "@angular/core";

@Directive({
  selector: "[appGridItem]",
})
export class GridItemDirective {
  // HostBinding 这个指令用于样式数据的绑定
  @HostBinding("style.flex-shrink") flexShrink = "0";
  @HostBinding("style.display") display = "grid";
  @HostBinding("style.grid-template-areas") gridTemplateAreas = `'image' 'title'`;
  @HostBinding("style.place-items") placeItems = "center";
  @HostBinding("style.width") width = "4rem";
}
