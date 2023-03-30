import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
    private static readonly DEFAULT = '00:00';
    transform(value: number): string {
      if (!value) {
        return DurationPipe.DEFAULT;
      }
      const minutes: number = Math.floor(value / 60);
      return minutes.toString().padStart(2, '0') + ':' +
        (value - minutes * 60).toString().padStart(2, '0');
    }
}
