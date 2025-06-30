import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MovieList } from './pages/movie-list/movie-list';
import { MovieFormPage } from './pages/movie-form-page/movie-form-page';
import { MovieDetailsComponent } from './pages/movie-details-component/movie-details-component';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    { path: 'movies', component: MovieList },
    { path: 'movies/:nameMovie', component: MovieDetailsComponent},
    { path: 'create', component: MovieFormPage } 
];


