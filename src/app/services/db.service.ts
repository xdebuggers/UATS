import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DBService {
  constructor(private http: HttpClient) {}

  getJobs() {
    return this.http.get(`${environment.apiURL}job`);
  }
  getUniversties() {
    return this.http.get(`${environment.apiURL}university`);
  }
  getSkills() {
    return this.http.get(`${environment.apiURL}skill`);
  }
  getCourses() {
    return this.http.get(`${environment.apiURL}course`);
  }
}
