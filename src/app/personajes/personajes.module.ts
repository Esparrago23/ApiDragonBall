import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesCardsComponent } from './personajes-cards/personajes-cards.component';
import { PersonajesTransformacionesComponent } from './personajes-transformaciones/personajes-transformaciones.component';



@NgModule({
  declarations: [
    PersonajesCardsComponent,
    PersonajesTransformacionesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonajesModule { }
