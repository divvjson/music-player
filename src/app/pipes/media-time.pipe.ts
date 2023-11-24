import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mediaTime', standalone: true })
export class MediaTimePipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value)) return '';

    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}