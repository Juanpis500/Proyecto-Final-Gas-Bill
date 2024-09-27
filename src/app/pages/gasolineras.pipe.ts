import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gasolineras'
})
export class GasolinerasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
