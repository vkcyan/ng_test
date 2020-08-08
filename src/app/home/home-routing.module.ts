import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeContainerComponent } from "./components/home-container/home-container.component";
import { HomeDetailComponent } from "./components/home-detail/home-detail.component";
import { HomeGrandComponent } from "./components/home-grand/home-grand.component";
import { HomeAuxComponent } from "./components/home-aux/home-aux.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeContainerComponent,
    children: [
      {
        path: "",
        redirectTo: "11",
        pathMatch: "full",
      },
      {
        path: ":tabLink",
        component: HomeDetailComponent,
        children: [
          {
            path: "aux",
            component: HomeAuxComponent,
            outlet: "zore",
          },
          {
            path: "grand",
            component: HomeGrandComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
