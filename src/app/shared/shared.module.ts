import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ScrollTabComponent } from "./components/scroll-tab/scroll-tab.component";
import { SwiperComponent } from "./components/swiper/swiper.component";
import { HorizontalGridComponent } from "./components/horizontal-grid/horizontal-grid.component";
@NgModule({
  declarations: [ScrollTabComponent, HorizontalGridComponent, SwiperComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, ScrollTabComponent, HorizontalGridComponent, SwiperComponent],
})
export class SharedModule {}
