import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DBService {
  constructor() {}

  getJobs() {
    var jobs: string[] = ['Engineer', 'manager', 'tester'];
    return jobs;
  }
  getUniversties() {
    var universities: string[] = ['KOU', 'SOU', 'IST'];
    return universities;
  }
  getSkills() {
    var skills: string[] = ['problem solving', 'best practice', 'swimming'];
    return skills;
  }
  getCourses() {
    var courses: string[] = ['TBL', 'MML', 'EDV'];
    return courses;
  }
}
