import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-suggestions-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './suggestions-page.component.html',
  styleUrl: './suggestions-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuggestionsPageComponent { }
