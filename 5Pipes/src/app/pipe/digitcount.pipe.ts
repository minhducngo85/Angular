import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitcount'
})
export class DigitcountPipe implements PipeTransform {

  transform(value : number): number {
    let s = value.toString();
    return s.length;
  }

}
