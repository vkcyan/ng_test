import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

export interface menuInter {
  title: string;
  readonly link: string;
}
@Component({
  selector: "app-scroll-tab",
  templateUrl: "./scroll-tab.component.html",
  styleUrls: ["./scroll-tab.component.scss"],
})
export class ScrollTabComponent implements OnInit {
  constructor() {}
  @Input() tabs: menuInter[];
  @Output() tabSelectd = new EventEmitter();
  ngOnInit(): void {}
  selectId: number = -1; // 选中菜单

  get aaa(): number {
    return 11;
  }
  toggleSelect(index: number) {
    this.selectId = index;
    this.tabSelectd.emit(index);
  }
}
