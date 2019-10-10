import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToTime'
})
export class SecondsToTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
      const minutes: number = Math.floor(value / 60);
      const hours: number = Math.floor(minutes / 60);
      const minutesStr = (minutes % 60).toString().padStart(2, '0');
      const secondsStr = (value % 60).toString().padStart(2, '0');
      return `${hours > 0 ? hours + ':' : ''}${minutesStr}:${secondsStr}`;
  }

}
