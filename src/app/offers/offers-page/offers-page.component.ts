import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-offers-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './offers-page.component.html',
  styleUrl: './offers-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffersPageComponent {
  @Input() key?: string;
}
