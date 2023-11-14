import { Injectable, inject } from '@angular/core';
import { Track } from '../interfaces/track.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TrackService {

  public tracks: Array<Track> = [
    {
      artist: 'Kevin MacLeod',
      name: 'Airport Lounge',
      gradient: this.getGradient(),
      url: 'assets/tracks/Airport Lounge.mp3',
    },
    {
      artist: 'Kevin MacLeod',
      name: 'Awesome Call',
      gradient: this.getGradient(),
      url: 'assets/tracks/Awesome Call.mp3',
    },
    {
      artist: 'Kevin MacLeod',
      name: 'Backed Vibes',
      gradient: this.getGradient(),
      url: 'assets/tracks/Backed Vibes.mp3',
    },
  ];

  private http = inject(HttpClient);

  private getGradient() {
    return `linear-gradient(to bottom right, ${this.getRandomColor()}, ${this.getRandomColor()})`;
  }

  private getRandomColor(): string {
    let components = [0, 0, 0];
    const highIndex = Math.floor(Math.random() * 3);
    components[highIndex] = Math.floor(Math.random() * 55 + 200);

    for (let i = 0; i < 3; i++) {
      if (i !== highIndex) {
        components[i] = Math.floor(Math.random() * 201);
      }
    }

    return `#${components.map(c => c.toString(16).padStart(2, '0')).join('')}`;
  }
}