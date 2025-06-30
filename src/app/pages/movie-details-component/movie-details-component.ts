import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie';
import Movie from '../../models/Movie';


@Component({
  selector: 'app-movie-details-component',
  imports: [Header ],
  templateUrl: './movie-details-component.html',
  styleUrl: './movie-details-component.css'
})
export class MovieDetailsComponent {

  selectedMovie?: Movie ;



  constructor(private route: ActivatedRoute , private movieService: MovieService) {
    const movieName = this.route.snapshot.params['nameMovie'];
    console.log(movieName);
    this.selectedMovie = movieService.getMovie(movieName);
    console.log(this.selectedMovie);
  }
}
