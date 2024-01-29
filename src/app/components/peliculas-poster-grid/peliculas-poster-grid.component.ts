import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/now-playing.interface';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Result } from '../../interfaces/searc.movies.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrl: './peliculas-poster-grid.component.scss'
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input({required: true}) movies!: Movie[] | Result[];

  constructor(config: NgbRatingConfig, private router: Router) { }

  ngOnInit(): void {
    // console.log (this.movies);
  }

  goto(movie:Movie | Result){
    this.router.navigate(['/pelicula', movie.id]);
  }

}
