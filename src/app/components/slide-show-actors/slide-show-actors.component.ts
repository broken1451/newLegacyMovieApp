import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Credits } from '../../interfaces/credits.interface';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide-show-actors',
  templateUrl: './slide-show-actors.component.html',
  styleUrl: './slide-show-actors.component.scss'
})
export class SlideShowActorsComponent implements OnInit, AfterViewInit{

  @Input() actors: Credits | any = [];
  public swiper!: Swiper;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.actors);
  }

  ngAfterViewInit(){
    this.swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      slidesPerView: 5.3,
      freeMode: true, 
      spaceBetween: 15
    });

  }
}
