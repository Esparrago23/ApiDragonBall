import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesCardsComponent } from './personajes-cards/personajes-cards.component';
import { PersonajesTransformacionesComponent } from './personajes-transformaciones/personajes-transformaciones.component';
import { FormsModule } from '@angular/forms';
import { PlanetasModule } from '../planetas/planetas.module';
import { PersonajesEditarComponent } from './personajes-editar/personajes-editar.component';
import { PersonajesTransformacionesComponent } from './personajes-transformaciones/personajes-transformaciones.component';



@NgModule({
  declarations: [
    PersonajesCardsComponent,
    PersonajesTransformacionesComponent,
    PersonajesEditarComponent
    PersonajesTransformacionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlanetasModule
],
  exports:[
    PersonajesCardsComponent,
    PersonajesTransformacionComponent
  ]
})
export class PersonajesModule { }
