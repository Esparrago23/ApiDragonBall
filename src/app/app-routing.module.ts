import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesCardsComponent } from './personajes/personajes-cards/personajes-cards.component';
const routes: Routes = [
  {path: '', redirectTo:'/Personajes', pathMatch:'full'},
  {path: 'Personajes', component:PersonajesCardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
