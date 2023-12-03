import { Injectable, signal } from '@angular/core';
import { Track } from '../interfaces/track.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({ providedIn: 'root' })
export class TrackService {
  private _tracks: Array<Track> = [
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
      id: 8,
      artist: 'Kevin MacLeod',
      title: 'Covert Affair',
      gradient: `linear-gradient(to bottom right, #5E24FC, #B526FC)`,
      url: 'assets/tracks/Covert Affair.mp3',
    },
    {
      id: 9,
      artist: 'Kevin MacLeod',
      title: 'Dances and Dames',
      gradient: `linear-gradient(to bottom right, #15C2FF, #551DFF)`,
      url: 'assets/tracks/Dances and Dames.mp3',
    },
    {
      id: 10,
      artist: 'Kevin MacLeod',
      title: 'Dispersion Relation',
      gradient: `linear-gradient(to bottom right, #12FF6F, #16FFC9)`,
      url: 'assets/tracks/Dispersion Relation.mp3',
    },
    {
      id: 11,
      artist: 'Kevin MacLeod',
      title: 'Fast Talkin',
      gradient: `linear-gradient(to bottom right, #A91BFF, #FF1E76)`,
      url: 'assets/tracks/Fast Talkin.mp3',
    },
    {
      id: 12,
      artist: 'Kevin MacLeod',
      title: 'Faster Does It',
      gradient: `linear-gradient(to bottom right, #FF2547, #FF5325)`,
      url: 'assets/tracks/Faster Does It.mp3',
    },
  ];

  public tracks = signal<Track[]>([]);

  constructor() {
    const tracksAsString = localStorage.getItem('tracks');
    if (tracksAsString === null) {
      localStorage.setItem('tracks', JSON.stringify(this._tracks));
      this.tracks.set(this._tracks);
      return;
    }

    const tracks = JSON.parse(tracksAsString) as Track[];
    this.tracks.set(tracks);
  }

  public drop(event: CdkDragDrop<Track[]>) {
    localStorage.removeItem('tracks');
    moveItemInArray(this.tracks(), event.previousIndex, event.currentIndex);
    localStorage.setItem('tracks', JSON.stringify(this.tracks()));
  }

  public remove(track: Track) {
    localStorage.removeItem('tracks');
    const tracksFiltered = this.tracks().filter(t => t.id !== track.id);
    localStorage.setItem('tracks', JSON.stringify(tracksFiltered));
    this.tracks.set(tracksFiltered);
  }

  public reset() {
    localStorage.removeItem('tracks');
    localStorage.setItem('tracks', JSON.stringify(this._tracks));
    this.tracks.set(this._tracks);
  }
}
