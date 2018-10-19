import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'ordinal'})
export class OrdinalPipe implements PipeTransform {
  transform(int) {
    if (typeof int === 'string') {
      return int
    } else {
      const ones = +int % 10, tens = +int % 100 - ones;
      return int + [`<sup>th</sup>`,`<sup>st</sup>`,`<sup>nd</sup>`,`<sup>rd</sup>`][ tens === 10 || ones > 3 ? 0 : ones ];
    }
  }
}
