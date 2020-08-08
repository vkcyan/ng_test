import { NgModule, InjectionToken } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../shared/shared.module";
import { HomeContainerComponent } from "./components/home-container/home-container.component";
import { HomeDetailComponent } from "./components/home-detail/home-detail.component";
import { HomeGrandComponent } from "./components/home-grand/home-grand.component";
import { HomeAuxComponent } from "./components/home-aux/home-aux.component";
import { HomeService } from "./services/home.service";

export const token = new InjectionToken<string>("baseUrl");

@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent],
  providers: [
    // HomeService,
    {
      provide: token,
      useValue: "111111111111",
    },
  ],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
