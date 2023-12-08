import { Routes } from '@angular/router';
import { SuggestionsPageComponent } from './suggestions/suggestions-page/suggestions-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'suggestions',
    pathMatch: 'full',
  },
  {
    path: 'suggestions',
    component: SuggestionsPageComponent,
  },
];
