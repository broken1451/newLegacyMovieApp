import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(image: string, ...args: any): unknown {

    // <img src="https://image.tmdb.org/t/p/w500/{{movie.backdrop_path}}.jpg" class="img-fluid poster" [alt]="movie.title">
    // console.log (image == '/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg');
    if ( !image ) {
      return 'assets/images/noimage.png';
    }

    return `https://image.tmdb.org/t/p/w500/${image}`;
  }

}
