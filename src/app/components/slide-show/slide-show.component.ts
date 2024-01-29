import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/now-playing.interface';
import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css'


@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrl: './slide-show.component.scss'
})
export class SlideShowComponent implements OnInit, AfterViewInit {

  public swiper!: Swiper;

  @Input({required: true}) movies!: Movie[];

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(){
    this.swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true
    });

  }

  onSlideNext(){
    this.swiper.slideNext();
  }

  onSlidePrev(){
    this.swiper.slidePrev();
  }
}
