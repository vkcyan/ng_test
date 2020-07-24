import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, DoCheck } from "@angular/core";

export interface menuInter {
  title: string;
  readonly link: string;
}
@Component({
  selector: "app-scroll-tab",
  templateUrl: "./scroll-tab.component.html",
  styleUrls: ["./scroll-tab.component.scss"],
})
export class ScrollTabComponent implements OnInit, OnChanges, DoCheck {
  constructor() {
    console.log("类开始初始化");
  }
  @Input() tabs: menuInter[];
  @Input() selectId: number = -1; // 选中菜单
  @Output()
  tabSelectd = new EventEmitter();
  // 此api有点类似于watch的监听函数,父组件传入的数值一旦发生改变都会被这个函数监听,并实时进行数据的回调
  ngOnChanges(changes: SimpleChanges): void {
    console.log("组件数值字变化", changes);
  }
  // 组件初始化
  ngOnInit(): void {
    console.log("组件初始化");
  }
  // 脏值检测 这个挺复杂的
  ngDoCheck(): void {
    console.log("子组件,脏值检测");
  }
  // 组件内容初始化 组件内容为例如插槽
  ngAfterContentInit(data): void {
    console.log("组件内部数据初始化", data);
  }
  /**
   * 组件内容脏值检测
   */
  ngAfterContentChecked(): void {
    console.log("组件内容脏值检测");
  }
  /**
   * 组件包括所有的子组件全部初始化完成
   */
  ngAfterViewInit(): void {
    console.log("子组件全部视图初始化完成");
  }
  /**
   * 组件完成的脏值检测
   */
  ngAfterViewChecked(): void {
    console.log("子组件视图的脏值检测");
  }
  // 页面卸载
  ngOnDestroy(): void {
    console.log('页面卸载.进行内存的一些清理');
  }
  toggleSelect(index: number) {
    this.tabSelectd.emit(index);
  }
}
