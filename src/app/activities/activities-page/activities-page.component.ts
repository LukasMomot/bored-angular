import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivitiesListComponent } from '../activities-list/activities-list.component';

@Component({
  selector: 'app-activities-page',
  standalone: true,
  imports: [
    CommonModule,
    ActivitiesListComponent
  ],
  templateUrl: './activities-page.component.html',
  styleUrl: './activities-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitesPageComponent { }
