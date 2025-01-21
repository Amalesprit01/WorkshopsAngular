import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component'; // Importez votre composant
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { FormUserComponent } from './form-user/form-user.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path: '', redirectTo:'Home', pathMatch:"full"},
  { path: 'Residence', component: ResidencesComponent } ,// Route par défaut pointant vers ResidencesComponent
  {path: 'Home', component:HomeComponentComponent},
  {path: 'Product', component:ProductComponent},
  {path: 'addProduct', component:AddProductComponent},

  { path: 'residences/:id', component: ResidenceDetailsComponent },
  { path: 'residence-details', component: ResidenceDetailsComponent },
  { path: 'add-residence', component: AddResidenceComponent},
  { path: 'FormUser', component: FormUserComponent },
  { path: 'ListProduit', component: ListProduitComponent },
  {path: '**', component:NotFoundComponentComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
