import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarRoutingModule } from './buscar-routing.module';
import { BuscarComponent } from './buscar.component';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    BuscarComponent
  ],
  imports: [
    CommonModule,
    BuscarRoutingModule,
    ComponentsModule
  ],
  exports: [BuscarComponent]
})
export class BuscarModule { }
