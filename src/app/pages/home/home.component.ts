import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackService } from '../../services/track.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { Track } from '../../interfaces/track.interface';

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
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  public trackService = inject(TrackService);
  private cdr = inject(ChangeDetectorRef);

  drop(event: CdkDragDrop<Track[]>) {
    moveItemInArray(this.trackService.tracks, event.previousIndex, event.currentIndex);
  }
}
