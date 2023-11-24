import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TrackService } from '../../services/track.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Track } from '../../interfaces/track.interface';
import { MatSlider, MatSliderDragEvent, MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    RouterModule,
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit, AfterViewInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private trackService = inject(TrackService);
  private renderer2 = inject(Renderer2);

  @ViewChild(MatSlider)
  public seekbarSlider: MatSlider | undefined;
  public track: Track | undefined;
  public audio = new Audio();
  public hasLoadedMetadata = signal(false);
  public isPlaying = signal(false);

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

    this.track = this.trackService.tracks.find(track => track.id === trackId);

    if (this.track === undefined) {
      throw new Error(`Track not found`);
    }

    this.audio.src = this.track.url;
    this.audio.load();
    this.audio.addEventListener('loadedmetadata', () => this.hasLoadedMetadata.set(true));
  }

  ngAfterViewInit() {
    if (this.seekbarSlider === undefined) return;

    const active = this.seekbarSlider._elementRef.nativeElement.querySelector('.mdc-slider__track--active_fill');
    const inactive = this.seekbarSlider._elementRef.nativeElement.querySelector('.mdc-slider__track--inactive');

    this.renderer2.setStyle(active, 'border-image', this.track?.gradient + ' 1');
    this.renderer2.setStyle(inactive, 'background-color', 'white');
  }

  public handleSeek(event: MatSliderDragEvent) {
    this.audio.currentTime = event.value;
  }

  public previous() {

  }

  public replay10() {
    this.audio.currentTime = this.audio.currentTime - 10;
  }

  public play() {
    this.audio.play();
    this.isPlaying.set(true);
  }

  public pause() {
    this.audio.pause();
    this.isPlaying.set(false);
  }

  public forward10() {
    this.audio.currentTime = this.audio.currentTime + 10;
  }

  ngOnDestroy() {
    this.audio.pause();
  }
}
