import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface University {
  name: string;
  web_pages: string[];
  country: string;
  alpha_two_code: string;
}
const proxy = 'https://cors-anywhere.herokuapp.com/';
const url = 'http://universities.hipolabs.com/search?country=canada';
@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getUniversities(): Observable<University[]> {
    return this.http.get<University[]>('/api/universities');
  }
}
