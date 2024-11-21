import { Component } from '@angular/core';
import { Fournisseur } from '../core/models/Fournisseur.model';


@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styleUrls: ['./list-fournisseur-component.component.css']
})
export class ListFournisseurComponentComponent {
  list: Fournisseur[] = [
    { idFournisseur: 1, code: '1ABC4522', libelle: 'hp' },
    { idFournisseur: 2, code: '2ABC4522', libelle: 'dell' },
    { idFournisseur: 3, code: '3ABC4522', libelle: 'Lenovo' },
    { idFournisseur: 400, code: '48ABC452', libelle: 'asus' }
  ];

  getColor(libelle: string): string {
    return libelle === 'hp' ? 'green' : 'yellow';
  }

  getFontWeight(code: string): string {
    return code.startsWith('2A') ? 'bold' : 'normal';
  }

  removeFournisseur(index: number): void {
    this.list.splice(index, 1);
  }

}
