import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./index/app.component";
import { ScrollTabComponent } from "./index/components/scroll-tab/scroll-tab.component";

@NgModule({
  declarations: [AppComponent, ScrollTabComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
