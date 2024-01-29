import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaRoutingModule } from './pelicula-routing.module';
import { PeliculaComponent } from './pelicula.component';
import { PipesModule } from '../../pipes/pipes.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    PeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculaRoutingModule,
    PipesModule,
    NgbRatingModule,
    ComponentsModule
  ],
  exports: [PeliculaComponent]
})
export class PeliculaModule { }
