import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { Activity } from '../activity';
import { RouterLink } from '@angular/router';
import { SupriseTextComponent } from "../suprise-text/suprise-text.component";

@Component({
    selector: 'app-activity-card',
    templateUrl: './activity-card.component.html',
    styleUrl: './activity-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterLink,
        SupriseTextComponent
    ]
})
export class ActivityCardComponent {
  activity = input.required<Activity>();
}
