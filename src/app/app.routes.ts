import { Routes } from '@angular/router';
import { SuggestionsPageComponent } from '@app/activities';

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
