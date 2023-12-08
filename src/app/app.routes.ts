import { Routes } from '@angular/router';
import { SuggestionsPageComponent } from '@app/activities';
import { OffersPageComponent } from '@app/offers';

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
  {
    path: 'offers',
    component: OffersPageComponent
  }
];
