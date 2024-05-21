// services/movies.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie';
import { MOVIES } from '../../data/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }
}
