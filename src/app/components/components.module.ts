import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NabvarComponent } from './nabvar/nabvar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlideShowActorsComponent } from './slide-show-actors/slide-show-actors.component';


@NgModule({
  declarations: [
    NabvarComponent,
    SlideShowComponent,
    PeliculasPosterGridComponent,
    SlideShowActorsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgbRatingModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [NgbRatingConfig],
  exports: [NabvarComponent, SlideShowComponent, PeliculasPosterGridComponent, SlideShowActorsComponent]
})
export class ComponentsModule { }
