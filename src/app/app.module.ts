import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { HomeModule } from "./home/home.module";
import { registerLocaleData } from "@angular/common";
import localZh from "@angular/common/locales/zh-Hans";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule, HomeModule],
  providers: [{ provide: LOCALE_ID, useValue: "zh-Hans" }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // 注册中文
    registerLocaleData(localZh, "zh");
  }
}
