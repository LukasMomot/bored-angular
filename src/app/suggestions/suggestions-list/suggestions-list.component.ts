import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { Activity } from '../activity';
import { ActivityCardComponent } from "../activity-card/activity-card.component";
import { ActivityService } from '../activity.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-suggestions-list',
    standalone: true,
    templateUrl: './suggestions-list.component.html',
    styleUrl: './suggestions-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ActivityCardComponent
    ]
})

export class SuggestionsListComponent {
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
      },
      {
        activity: 'Whisky tasting',
        type: 'relaxation',
        participants: 2,
        price: 0.5,
        link: 'https://www.whisky.com/',
        accessibility: 0.1,
      }
    ]);

  loadActivities() {
    this.activityService.getRandomActivities(3).pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(activities => {
        activities[0].favorite = true;
        this.activities.set(activities);
    });
  }
 }

