import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getRandomActivity() {
    return this.http.get<Activity>('https://www.boredapi.com/api/activity');
  }
}
