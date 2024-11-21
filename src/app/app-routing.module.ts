import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component'; // Importez votre composant

const routes: Routes = [
  { path: '', component: ResidencesComponent } // Route par défaut pointant vers ResidencesComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
