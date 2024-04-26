import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { Activity } from "./activity";
import { computed, inject } from "@angular/core";
import { map, pipe, switchMap, tap } from "rxjs";
import { ActivityService } from "./activity.service";

type ActivitiesState = {
  activities: Activity[]
};

const initialState: ActivitiesState = {
  activities: [
    {
      activity: 'Learn Angular',
      type: 'education',
      participants: 1,
      price: 0,
      link: 'https://angular.io/',
      accessibility: 0,
      favorite: true,
      key: '1',
    },
    {
      activity: 'Whisky tasting',
      type: 'relaxation',
      participants: 2,
      price: 0.5,
      link: 'https://www.whisky.com/',
      accessibility: 0.1,
      key: '2',
    }
  ]
};

export const ActivitiesStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    activityCount: computed(() => store.activities()?.length)
   })),
   withMethods((store) => {
    const activityService = inject(ActivityService);
    return {
      loadActivities: rxMethod<void>(
        pipe(
          switchMap(() => activityService.getRandomActivities(Math.floor(Math.random() * 4) + 2)),
          tap(activities => {
              activities[0].favorite = true;
              patchState(store, { activities })
            }),
        )
      )
    }
   })
);
