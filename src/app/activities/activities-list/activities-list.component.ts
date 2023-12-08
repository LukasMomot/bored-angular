import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, computed, inject, signal } from '@angular/core';
import { Activity } from '../activity';
import { ActivityCardComponent } from "../activity-card/activity-card.component";
import { ActivityService } from '../activity.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  activities = signal<Activity[]>(
    [
      {
        activity: 'Learn Angular',
        type: 'education',
        participants: 1,
        price: 0,
        link: 'https://angular.io/',
        accessibility: 0,
        favorite: true,
        key: '1',
      },
      {
        activity: 'Whisky tasting',
        type: 'relaxation',
        participants: 2,
        price: 0.5,
        link: 'https://www.whisky.com/',
        accessibility: 0.1,
        key: '2',
      }
    ]);

  activityCount = computed(() => this.activities().length);

  loadActivities() {
    // random number of activities between 2 and 5
    const count = Math.floor(Math.random() * 4) + 2;

    this.activityService.getRandomActivities(count)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(activities => {
        activities[0].favorite = true;
        this.activities.set(activities);
      });
  }
}

