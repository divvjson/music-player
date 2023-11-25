import { Injectable } from '@angular/core';
import { Track } from '../interfaces/track.interface';

@Injectable({ providedIn: 'root' })
export class TrackService {

  public tracks: Array<Track> = [
    {
      id: 1,
      artist: 'Kevin MacLeod',
      title: 'Airport Lounge',
      gradient: `linear-gradient(to bottom right, #F43DB3, #FF9D5C)`,
      url: 'assets/tracks/Airport Lounge.mp3',
    },
    {
      id: 2,
      artist: 'Kevin MacLeod',
      title: 'Awesome Call',
      gradient: `linear-gradient(to bottom right, #06E3B7, #00B6F5)`,
      url: 'assets/tracks/Awesome Call.mp3',
    },
    {
      id: 3,
      artist: 'Kevin MacLeod',
      title: 'Backed Vibes',
      gradient: `linear-gradient(to bottom right, #FB3594, #6102FE)`,
      url: 'assets/tracks/Backed Vibes.mp3',
    },
  ];
}
