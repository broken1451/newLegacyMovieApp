import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { switchMap } from 'rxjs';
import { Movie } from '../../interfaces/now-playing.interface';
import { Result, SearchMovies } from '../../interfaces/searc.movies.interfaces';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.scss'
})
export class BuscarComponent implements OnInit {
  
  public page: number = 1;
  public movies!: Result[];
  public search: string = '';
  public numbersPage: any[] = this.movieService.numbersPage;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MoviesService) { }


  /**
   * Método del ciclo de vida de Angular que se ejecuta después de que se haya inicializado el componente.
   * Se suscribe a los parámetros de la ruta activa y realiza una búsqueda de películas utilizando el texto proporcionado.
   * @returns Un observable que emite los datos de la búsqueda de películas.
   */
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ text }) => {
        this.search = text;
       return this.searchMmovie(text, this.page.toString())
      })
    ).subscribe({
      next: (data) => {
        console.log(data);
        this.movies = data.results;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }


  onSelect(event: any){
    this.page = event.target.value;
    this.searchMmovie(this.search, this.page.toString()).subscribe({
      next: (data) => {
        this.movies = data.results;
      },
      error: (error) => {
        console.log(error);
      }
    })
    
  }

  searchMmovie(text:string, page?: string){
    return this.movieService.searchMovie(text, page);
  }
  

}
