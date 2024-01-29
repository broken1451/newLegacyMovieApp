import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { NowPlayingResponse } from '../interfaces/now-playing.interface';
import { environment } from '../../environments/environment';
import { NumberSearchPage, SearchMovies } from '../interfaces/searc.movies.interfaces';
import { DetailsMovie } from '../interfaces/details.movie.interface';
import { Credits } from '../interfaces/credits.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public cargando: boolean = false;
  public numbersPage: NumberSearchPage[] = [
    {
      number: 1,
      value: 1
    },
    {
      number: 2,
      value: 2
    },
    {
      number: 3,
      value: 3
    },
    {
      number: 4,
      value: 4
    },
    {
      number: 5,
      value: 5
    },
    {
      number: 6,
      value: 6
    },
    {
      number: 7,
      value: 7
    },
    {
      number: 8,
      value: 8
    },
    {
      number: 9,
      value: 9
    },
  ];



  constructor(private http: HttpClient) { }


  getNowPlaying(page?: string): Observable<NowPlayingResponse>{

    // one method with api_key
    // return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=7a8f6e8e0b4a3f5d6c0b9a9d0f1f6b0b&language=es-ES&page=1`);
    // headers = headers.append('Accept', 'application/json');
    // headers = headers.append('Authorization', `Bearer ${environment.token_access}`);
    // const headers = new HttpHeaders({
    //   'Accept': 'application/json',
    //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWU4MTMxODZmMTk3OGI0Yzc2OWExN2NmNWMxNDRhYiIsInN1YiI6IjVkMzg4YTRjZTU0ZDVkMDE4ZWRiNzkzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rb8Lvbrsc0l8F2v_h5ZZjcT7biNqWf4AMbKNlfreS6g'})
    
    if (this.cargando) {
      return new Observable<NowPlayingResponse>(); // Return an empty observable
      // or
      // return of({} as NowPlayingResponse);
    }
    
    this.cargando = true;
    return this.http.get<NowPlayingResponse>(`${environment.url_base}/now_playing?language=es-ES&page=${page}`,{}).pipe(
      tap(() => {
        this.cargando = false;
      })
    );

  }


  searchMovie(texto: string, page: string = '1'): Observable<SearchMovies>{
    // https://api.themoviedb.org/3/search/movie?query=avenger&include_adult=false&language=es-ES&page
    return this.http.get<SearchMovies>(`${environment.url_base_search}/search/movie?query=${texto}&include_adult=false&language=es-ES&page=${page}`);
  }


  // https://api.themoviedb.org/3/movie/{movie_id}
  getMovieDetail(id: string): Observable<DetailsMovie | null>{
    return this.http.get<DetailsMovie>(`${environment.url_base}/${id}?language=es-ES`).pipe(
      catchError(err => of(null))
    );
  }

  getCast(id: string): Observable<Credits | Credits[]> {
    // https://api.themoviedb.org/3/movie/787699/credits?language=en-US
    return this.http.get<Credits>(`${environment.url_base}/${id}/credits?language=es-ES`).pipe(
      catchError(err => of([]))
    );
  }

}
