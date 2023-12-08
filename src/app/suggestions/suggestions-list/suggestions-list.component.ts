import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-suggestions-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './suggestions-list.component.html',
  styleUrl: './suggestions-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuggestionsListComponent { }
