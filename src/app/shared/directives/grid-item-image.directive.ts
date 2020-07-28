import { Directive, ElementRef, Renderer2, Output, Input } from "@angular/core";

@Directive({
  selector: "[appGridItemImage]",
})
export class GridItemImageDirective {
  @Input() imageSize = "1rem";
  constructor(private ref: ElementRef, private rd2: Renderer2) {}
  ngOnInit(): void {
    console.log(this.imageSize);

    this.rd2.setStyle(this.ref.nativeElement, "grid-area", "image");
    this.rd2.setStyle(this.ref.nativeElement, "width", this.imageSize);
    this.rd2.setStyle(this.ref.nativeElement, "height", this.imageSize);
  }
}
