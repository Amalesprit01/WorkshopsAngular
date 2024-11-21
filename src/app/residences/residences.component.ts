import { Component } from '@angular/core';
import { Residence } from '../core/models/residence.model';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  favoriteResidences: Residence[] = [];
  searchTerm: string = ''; // Valeur de la recherche

  showLocation(address: string): void {
    if (address === 'inconnu') {
      alert("L'adresse de cette résidence est inconnue.");
    } else {
      console.log(`Adresse : ${address}`);
    }
  }

  addToFavorites(residence: Residence): void {
    if (!this.favoriteResidences.includes(residence)) {
      this.favoriteResidences.push(residence);
      alert(`${residence.name} a été ajouté à vos favoris !`);
    } else {
      alert(`${residence.name} est déjà dans vos favoris.`);
    }
  }

  getFilteredResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
