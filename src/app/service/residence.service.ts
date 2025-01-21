import { Injectable } from '@angular/core';
import { Residence } from '../core/models/residence.model';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];
  
  constructor() { }
  getAllResidence() {
    return this.listResidences;
  }
  getResidenceById(id: number) {
    return this.listResidences.find(residence => residence.id === id);
  }
 
  deleteResidence(id:number){
  this.listResidences = this.listResidences.filter(u => u.id !== id);
}
getLastId() {
  return this.listResidences.length;
}
addResidence(residence: Residence) {
  const newId = this.getLastId() + 1;
  residence.id = newId; // Génère un nouvel ID pour la résidence
  this.listResidences.push(residence); // Ajoute la résidence à la liste
}


updateResidence(updatedResidence: Residence) {
  const index = this.listResidences.findIndex(res => res.id === updatedResidence.id);
  if (index !== -1) {
    this.listResidences[index] = updatedResidence; // Remplace la résidence existante par les nouvelles données
  }
}


}
