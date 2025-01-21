import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisation du formulaire
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,}')]], 
      description: ['', [Validators.required, Validators.minLength(10)]], 
     
    });
  }

  onSave() {
    if (this.productForm.valid) {
      console.log('Produit ajouté :', this.productForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
