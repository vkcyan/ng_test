import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeContainerComponent } from "./components/home-container/home-container.component";
import { HomeDetailComponent } from "./components/home-detail/home-detail.component";

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
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
