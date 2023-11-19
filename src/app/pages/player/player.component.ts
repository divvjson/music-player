import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TrackService } from '../../services/track.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Track } from '../../interfaces/track.interface';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private trackService = inject(TrackService);

  public track: Track | undefined;
  private audioPlayer: HTMLAudioElement = new Audio();

  ngOnInit() {
    const trackId = parseInt(this.route.snapshot.params['trackId']);

    if (isNaN(trackId)) {
      this.router.navigate(['']);
      return;
    }

    if (this.trackService.tracks.some(track => track.id === trackId) === false) {
      this.router.navigate(['']);
      return;
    }

    this.load(trackId);
    this.play();
  }

  private load(trackId: number) {
    this.track = this.trackService.tracks.find(track => track.id === trackId);

    if (this.track === undefined) {
      throw new Error(`Track not found`);
    }

    this.audioPlayer = new Audio(this.track.url);
  }

  private play() {
    this.audioPlayer.play();
  }

  private pause() {
    this.audioPlayer.pause();
  }

  ngOnDestroy() {
    this.pause();
  }
}
