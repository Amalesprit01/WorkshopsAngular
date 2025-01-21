import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FournisseurComponentComponent } from './fournisseur-component/fournisseur-component.component';
import { ListFournisseurComponentComponent } from './list-fournisseur-component/list-fournisseur-component.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './apartements/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartements/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './apartements/add-apartment/add-apartment.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { FormUserComponent } from './form-user/form-user.component';
import { LogService } from './service/log.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    FournisseurComponentComponent,
    ListFournisseurComponentComponent,
    ListProduitComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent,
    NavBarComponentComponent,
    FormUserComponent,
    TodoListComponent,
    ProductComponent,
    AddProductComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }