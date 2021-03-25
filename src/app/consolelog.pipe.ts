import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'consolelog'
})
export class ConsolelogPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value)
    return '';
  }

}
