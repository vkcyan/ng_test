import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "appAge" })
export class AgoPipe implements PipeTransform {
  transform(value: any): any {
    console.log("管道得到的值", value);
    const seconds = Math.floor(+new Date() - +new Date(value)) / 1000;
    if (seconds < 30) {
      return "刚刚";
    }
    const intervals = {
      年: 3600 * 24 * 365,
      月: 3600 * 24 * 30,
      周: 3600 * 24 * 7,
      天: 3600 * 24,
      小时: 3600,
      分钟: 60,
      秒: 1,
    };
    let counter = 0;
    for (const unit in intervals) {
      if (Object.prototype.hasOwnProperty.call(intervals, unit)) {
        const element = intervals[unit];
        counter = Math.floor(seconds / element);
        console.log(counter);

        if (counter > 0) {
          return `${counter} ${unit}`;
        }
      }
    }
    return value;
  }
}
