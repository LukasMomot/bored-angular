import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from './activity';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getRandomActivity() {
    return this.http.get<Activity>('https://www.boredapi.com/api/activity');
  }

  getRandomActivities(count: number) {
    const activities = [];
    for (let i = 0; i < count; i++) {
      activities.push(this.getRandomActivity());
    }
    return forkJoin(activities);
  }

}
