import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, computed, inject, signal } from '@angular/core';
import { Activity } from '../activity';
import { ActivityCardComponent } from "../activity-card/activity-card.component";
import { ActivityService } from '../activity.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivitiesStore } from '../activities.store';

@Component({
  selector: 'app-activities-list',
  standalone: true,
  templateUrl: './activities-list.component.html',
  styleUrl: './activities-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ActivityCardComponent
  ]
})

export class ActivitiesListComponent {
  activityService = inject(ActivityService);
  private destroyRef = inject(DestroyRef);
  private store = inject(ActivitiesStore);

  activities = this.store.activities;
  activityCount = this.store.activityCount;

  loadActivities() {
    // random number of activities between 2 and 5
    const count = Math.floor(Math.random() * 4) + 2;
    this.store.loadActivities(count);
  }
}

