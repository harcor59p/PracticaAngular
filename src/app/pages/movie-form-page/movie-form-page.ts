import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { MovieFormComponent } from '../../components/movie-form-component/movie-form-component';

@Component({
  selector: 'app-movie-form-page',
  imports: [Header , MovieFormComponent],
  templateUrl: './movie-form-page.html',
  styleUrl: './movie-form-page.css'
})
export class MovieFormPage {

}
