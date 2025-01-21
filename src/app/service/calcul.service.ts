import { Injectable } from '@angular/core';
import { Produit } from '../core/models/produit';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  // Méthode pour obtenir le nombre de produits dont la propriété spécifiée correspond à la valeur donnée
  getNumberOf(list: any[], criteria: string, value: any): number {
    let n = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i][criteria] === value) {
        n++;
      }
    }
    return n;
  }
}
