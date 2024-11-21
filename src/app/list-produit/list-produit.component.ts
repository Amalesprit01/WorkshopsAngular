import { Component } from '@angular/core';
import { Produit } from '../core/models/produit';


@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent {
  // Liste des produits initialisée
  listProduits: Produit[] = [
    { idProduit: 1, code: 'P1478529', libelle: 'Produit1', prixUnitaire: 12.5, tauxTVA: 0.20 },
    { idProduit: 2, code: 'P147552P', libelle: 'Produit2', prixUnitaire: 30, tauxTVA: 0.1988 },
    { idProduit: 3, code: 'D14785CC', libelle: 'Produit3', prixUnitaire: 20, tauxTVA: 0.1980 },
    { idProduit: 4, code: 'E1478529', libelle: 'Produit4', prixUnitaire: 58, tauxTVA: 8.1980 },
    { idProduit: 5, code: 'F147852P', libelle: 'Produit5', prixUnitaire: 78, tauxTVA: 0.19}
  ];

  // Recherche par code
  searchQuery: string = '';

  // Index des produits modifiés
  modifiedIndexes: Set<number> = new Set();

  // Méthode pour ajuster la TVA
  adjustTVA(index: number): void {
    this.listProduits[index].tauxTVA = 20;
    this.modifiedIndexes.add(index);
  }

  // Filtrer les produits en fonction de la recherche
  get filteredProduits(): Produit[] {
    if (!this.searchQuery.trim()) {
      return this.listProduits;
    }
    return this.listProduits.filter(produit =>
      produit.code.toLowerCase().startsWith(this.searchQuery.toLowerCase())
    );
  }
}
