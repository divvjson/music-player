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
    {
      id: 4,
      artist: 'Kevin MacLeod',
      title: 'Bass Soli',
      gradient: `linear-gradient(to bottom right, #01ADF9, #6556F1)`,
      url: 'assets/tracks/Bass Soli.mp3',
    },
    {
      id: 5,
      artist: 'Kevin MacLeod',
      title: 'Bass Vibes',
      gradient: `linear-gradient(to bottom right, #6CD94C, #0278F4)`,
      url: 'assets/tracks/Bass Vibes.mp3',
    },
    {
      id: 6,
      artist: 'Kevin MacLeod',
      title: 'Cool Blast',
      gradient: `linear-gradient(to bottom right, #F9D900, #FC4351)`,
      url: 'assets/tracks/Cool Blast.mp3',
    },
    {
      id: 7,
      artist: 'Kevin MacLeod',
      title: 'Cool Vibes',
      gradient: `linear-gradient(to bottom right, #FC32F8, #FC4040)`,
      url: 'assets/tracks/Cool Vibes.mp3',
    },
    {
      id: 7,
      artist: 'Kevin MacLeod',
      title: 'Covert Affair',
      gradient: `linear-gradient(to bottom right, #5E24FC, #B526FC)`,
      url: 'assets/tracks/Covert Affair.mp3',
    },
  ];
}
