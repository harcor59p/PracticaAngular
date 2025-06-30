import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-movie-list',
  imports: [Header],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList {

  constructor( public movieService: MovieService ) {}
  

}
