import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SuggestionsListComponent } from '../suggestions-list/suggestions-list.component';

@Component({
  selector: 'app-suggestions-page',
  standalone: true,
  imports: [
    CommonModule,
    SuggestionsListComponent
  ],
  templateUrl: './suggestions-page.component.html',
  styleUrl: './suggestions-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuggestionsPageComponent { }
