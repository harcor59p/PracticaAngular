import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Header } from '../header/header';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-movie-form-component',
  imports: [Header , MovieFormComponent , ReactiveFormsModule , FormsModule],
  templateUrl: './movie-form-component.html',
  styleUrl: './movie-form-component.css'
})
export class MovieFormComponent {

  //Formulario
  movieForm: FormGroup;
  nameMovie: FormControl;
  yearMovie: FormControl;
  ratingMovie: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor(public movieService: MovieService) {
    // Inicialización del formulario
    this.nameMovie = new FormControl('', Validators.required);
    this.yearMovie = new FormControl('', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]);
    this.ratingMovie = new FormControl('');
    this.duration = new FormControl('');
    this.director = new FormControl('');

    this.movieForm = new FormGroup({
      nameMovie: this.nameMovie,
      yearMovie: this.yearMovie,
      ratingMovie: this.ratingMovie,
      duration: this.duration,
      director: this.director
    });


  }
  handleSubmit(): void {
    console.log(this.movieForm.value);
    this.movieService.addMovie(this.movieForm.value);
    this.movieForm.reset();
  }

}
