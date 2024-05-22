import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie';
import { MoviesService } from '../../../services/movies.service';
import {NgForm, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {

  sortDirection: string = 'desc';
  sortBy: string = 'rate';
  selectedMovieIndex: number | null = null;
  editedTitle: string = '';
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.moviesService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  deleteMovie(movie: Movie): void {
    this.movies = this.movies.filter(m => m !== movie);
  }


  editMovie(id: number): void {
    this.selectedMovieIndex = (this.selectedMovieIndex === id) ? null : id;
    if (this.selectedMovieIndex !== null) {
      this.editedTitle = this.movies.find(movie => movie.id === id)?.title || '';
    } else {
      this.editedTitle = '';
    }
  }

  saveEdit(): void {
    if (this.selectedMovieIndex !== null) {
      this.movies = this.movies.map(movie => {
        if (movie.id === this.selectedMovieIndex) {
          return { ...movie, title: this.editedTitle };
        } else {
          return movie;
        }
      });
    }
    this.selectedMovieIndex = null;
    this.editedTitle = '';
  }

  sortMovies(): void {
    this.movies.sort((a, b) => {
      switch (this.sortBy) {
        case 'year':
          return this.sortDirection === 'asc' ? a.year - b.year : b.year - a.year;
        case 'title':
          return this.sortDirection === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
        case 'rate':
          return this.sortDirection === 'asc' ? a.rating - b.rating : b.rating - a.rating;
        default:
          return 0;
      }
    });
  }


  toggleSortDirection(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortMovies();
  }


}
