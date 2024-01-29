import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/now-playing.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = [];
  public moviesSlide: Movie[] = [];
  public page: number = 1;



  /**
    * Maneja el evento de desplazamiento (scroll).
    * document.documentElement.scrollTop: 
    * El código seleccionado document.documentElement.scrollTop se utiliza para obtener la posición actual de desplazamiento vertical de la página web.
    * En JavaScript, document se refiere al objeto global que representa el documento HTML actual. documentElement se refiere al elemento raíz del documento HTML, que es el elemento <html>.
    * La propiedad scrollTop se utiliza para obtener o establecer la cantidad de desplazamiento vertical de un elemento. 
    * En este caso, document.documentElement.scrollTop se utiliza para obtener la cantidad de desplazamiento vertical de la página web en relación con la parte superior del documento.
    * Por ejemplo, si el valor de document.documentElement.scrollTop es 0, significa que la parte superior de la página web está visible en la ventana del navegador. 
    * Si el valor es mayor que 0, significa que la página web se ha desplazado hacia abajo.
    * Este código puede ser útil si necesitas realizar alguna acción basada en la posición de desplazamiento de la página web, como animaciones, 
    * efectos visuales o cargar contenido adicional a medida que el usuario se desplaza hacia abajo en la página.
    * 
    * document.documentElement.scrollHeight:
    * El código seleccionado document.documentElement.scrollHeight se utiliza para obtener la altura total del documento HTML en la página actual.
    * document se refiere al objeto global del documento HTML en el navegador. documentElement se refiere al elemento raíz del documento HTML, que es el elemento <html>. 
    * scrollHeight es una propiedad que devuelve la altura total del contenido del elemento, incluyendo el contenido que está oculto debido al desplazamiento vertical.
    * En resumen, document.documentElement.scrollHeight devuelve la altura total del documento HTML, incluyendo el contenido que no es visible en la pantalla debido al desplazamiento vertical.
  */
 /**
  * Maneja el evento de desplazamiento y carga más películas cuando el usuario llega al final de la página.
  */
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // console.log('scrolling');
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {

      this.page = this.page + 1;      
      /** 
       * En el código proporcionado, la línea this.movies.push(...data.results); se utiliza para agregar elementos al arreglo movies utilizando el operador de propagación (...).
       * Aquí hay una explicación paso a paso de lo que sucede en esta línea de código:
       * this.movies: this se refiere al objeto actual, y movies es una propiedad de ese objeto. Suponiendo que movies es un arreglo, esta línea de código se refiere al arreglo movies dentro del objeto actual.
       * .push(): push() es un método incorporado en JavaScript que se utiliza para agregar uno o más elementos al final de un arreglo. En este caso, se está utilizando en el arreglo movies para agregar elementos.
       *  ...data.results: data.results es una propiedad o variable que contiene un arreglo de elementos que se desean agregar al arreglo movies. 
       * El operador de propagación (...) se utiliza para descomponer el arreglo data.results en elementos individuales y pasarlos como argumentos separados al método push(). 
       * Esto permite agregar cada elemento del arreglo data.results como elementos individuales al arreglo movies.
       * **/
       this.movieService.getNowPlaying(this.page.toString()).subscribe((data) => {
        this.movies.push(...data.results);
        this.movieService.cargando = false;
      });
    }
  }

  constructor(private movieService: MoviesService) { }


  ngOnInit(): void {
    this.getNowPlaying(this.page.toString());
  }

  ngOnDestroy(): void {
    this.page = 1;
  }

  getNowPlaying(page?: string) {
    this.movieService.getNowPlaying(page).subscribe((data) => {
      this.movies = data.results;
      this.moviesSlide = data.results;
    });
  }
}
