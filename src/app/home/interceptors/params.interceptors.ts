import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";

@Injectable()
export class ParamsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("请求拦截器");
    const reqNext = req.clone({
      setParams: { icode: "12313313131312" },
      setHeaders: {
        aaaaa: "12312312312",
      },
    });
    console.log("处理后的http", reqNext);

    return next.handle(reqNext);
  }
}
