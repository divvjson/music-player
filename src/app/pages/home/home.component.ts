import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackService } from '../../services/track.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { Track } from '../../interfaces/track.interface';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropList,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private router = inject(Router);
  public trackService = inject(TrackService);
  public isDragMode = signal(false);

  public handleDragModeChanged(event: MatSlideToggleChange) {
    this.isDragMode.set(event.checked);
  }

  public navigate(track: Track) {
    this.router.navigate(['player' + '/' + track.id]);
  }
}
