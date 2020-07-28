import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appGridItemTitle]",
})
export class GridItemTitleDirective {
  constructor(private ref: ElementRef, private rd2: Renderer2) {
    this.rd2.setStyle(this.ref.nativeElement, "grid-area", "title");
  }
}
