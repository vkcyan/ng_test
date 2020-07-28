import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ScrollTabComponent } from "./components/scroll-tab/scroll-tab.component";
import { SwiperComponent } from "./components/swiper/swiper.component";
import { HorizontalGridComponent } from "./components/horizontal-grid/horizontal-grid.component";
import { GridItemDirective } from "./directives/grid-item.directive";
import { GridItemImageDirective } from "./directives/grid-item-image.directive";
import { GridItemTitleDirective } from "./directives/grid-item-title.directive";
@NgModule({
  declarations: [
    ScrollTabComponent,
    HorizontalGridComponent,
    SwiperComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ScrollTabComponent,
    HorizontalGridComponent,
    SwiperComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
  ],
})
export class SharedModule {}
