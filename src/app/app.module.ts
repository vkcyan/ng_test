import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { HomeModule } from "./home/home.module";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import localZh from "@angular/common/locales/zh-Hans";
import { ParamsInterceptor } from "./home/interceptors/params.interceptors";
import { NotificationInterceptor } from "./home/interceptors/notification.interceptors";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SharedModule, AppRoutingModule, HomeModule],
  providers: [
    { provide: LOCALE_ID, useValue: "zh-Hans" },
    // 注入全局的http拦截器
    { provide: HTTP_INTERCEPTORS, useClass: ParamsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NotificationInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // 注册中文
    registerLocaleData(localZh, "zh");
  }
}
