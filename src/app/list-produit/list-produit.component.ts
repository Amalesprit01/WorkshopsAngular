import { Component } from '@angular/core';
import { Produit } from '../core/models/produit';
import { CalculService } from '../service/calcul.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent {
  listProduits: Produit[] = [
    { idProduit: 1, code: 'P1478529', libelle: 'Produit1', prixUnitaire: 12.5, tauxTVA: 0.20, quantity: 10 },
    { idProduit: 2, code: 'P147552P', libelle: 'Produit2', prixUnitaire: 30, tauxTVA: 0.1988, quantity: 0 },
    { idProduit: 3, code: 'D14785CC', libelle: 'Produit3', prixUnitaire: 20, tauxTVA: 0.1980, quantity: 0 },
    { idProduit: 4, code: 'E1478529', libelle: 'Produit4', prixUnitaire: 58, tauxTVA: 8.1980, quantity: 0 },
    { idProduit: 5, code: 'F147852P', libelle: 'Produit5', prixUnitaire: 78, tauxTVA: 0.19, quantity: 12 }
  ];

  searchQuery: string = '';
  modifiedIndexes: Set<number> = new Set();

  constructor(private calculService: CalculService) {}

  adjustTVA(index: number): void {
    this.listProduits[index].tauxTVA = 20;
    this.modifiedIndexes.add(index);
  }

  get filteredProduits(): Produit[] {
    if (!this.searchQuery.trim()) {
      return this.listProduits;
    }
    return this.listProduits.filter(produit =>
      produit.code.toLowerCase().startsWith(this.searchQuery.toLowerCase())
    );
  }

// Méthode de vérification du stock
checkStock(): void {
  const numberOfZeroStock = this.calculService.getNumberOf(this.listProduits, 'quantity', 0);
  alert(`Il y a ${numberOfZeroStock} produits en rupture de stock.`);
}

}
