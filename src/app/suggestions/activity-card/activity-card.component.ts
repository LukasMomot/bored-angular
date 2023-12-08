import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityCardComponent {
  @Input( { required: true }) activity: Activity = {} as Activity;
}
