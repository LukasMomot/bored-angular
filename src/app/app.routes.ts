import { Routes } from '@angular/router';
import { ActivitesPageComponent } from './activities';
import { OffersPageComponent } from '@app/offers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'suggestions',
    pathMatch: 'full',
  },
  {
    path: 'suggestions',
    component: ActivitesPageComponent,
  },
  {
    path: 'offers/:key',
    component: OffersPageComponent
  }
];
