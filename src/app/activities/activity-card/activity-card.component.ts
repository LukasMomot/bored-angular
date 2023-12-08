import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Activity } from '../activity';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityCardComponent {
  @Input( { required: true }) activity: Activity = {} as Activity;
}
