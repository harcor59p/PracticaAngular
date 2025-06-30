import { Injectable } from '@angular/core';
import Movie from '../models/Movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [];

  constructor() {
    this.movies = [
      {
        nameMovie: 'The Dark Knight',
        yearMovie: 2008,
        ratingMovie: 9.0,
        duration: 152,
        director: 'Christopher Nolan'
      },
      {
        nameMovie: 'La Naranja Mecanica',
        yearMovie: 1971,
        ratingMovie: 8.8,
        duration: 136,
        director: 'Stanley Kubrick'
      }
    ]
   }

   addMovie(movie: Movie) {
    this.movies.push(movie);
   }

   
   
}
