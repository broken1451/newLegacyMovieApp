import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Observable, combineLatest, forkJoin, switchMap } from 'rxjs';
import { DetailsMovie } from '../../interfaces/details.movie.interface';
import { Location } from '@angular/common';
import { Credits } from '../../interfaces/credits.interface';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.scss'
})
export class PeliculaComponent implements OnInit {

  public movie!:DetailsMovie | null;
  public actors!:Credits | any;

  constructor(private activateRoute: ActivatedRoute, private movieService:MoviesService, private locatin: Location, private router: Router) { }


  
  ngOnInit(): void {
    // const id = this.activateRoute.snapshot.params['id'];
    // const {id} = this.activateRoute.snapshot.params;
    // combineLatest([this.getMovieDetails(id), this.getCredists(id)]).subscribe(([movie, credits])=>{
    // combineLatest({movie: this.getMovieDetails(id), cast:this.getCredists(id)}).subscribe(({movie, cast})=>{
    //     if (!movie) {
    //       this.router.navigate(['/home']);
    //       return;
    //     }
    //     this.movie = movie;
    //     this.actors = (credits as Credits).cast.filter((actor: any) => actor.profile_path !== null);
    // })

    this.activateRoute.params.pipe(
      switchMap(({id}) =>{
        return forkJoin([this.getMovieDetails(id), this.getCredists(id)])
      })
    ).subscribe({
      next: ([movie, credits]) => {
        if (!movie) {
          this.router.navigate(['/home']);
          return;
        }
        this.movie = movie;
        this.actors = (credits as Credits).cast.filter((actor: any) => actor.profile_path !== null);
      },
      error: error => console.error({ error })
    })


  }

  getMovieDetails(id: string): Observable<DetailsMovie | null> {
    return this.movieService.getMovieDetail(id);
  }


  back(){
    this.locatin.back();
  }


  getCredists(id: string): Observable<Credits | Credits[]>{
    return this.movieService.getCast(id);
  }
}
