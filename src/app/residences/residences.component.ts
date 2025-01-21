import { CommonServiceService } from './../core/Service/common-service.service';
import { ResidenceService } from './../service/residence.service';
import { Component } from '@angular/core';
import { Residence } from '../core/models/residence.model';
import { ResidenceNewService } from '../core/Service/residence-new.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {

  listResidences: Residence[] = []
  favoriteResidences: Residence[] = [];
  searchTerm: string = ''; // Valeur de la recherche
  same =0 ;
  listtest:any[] = [];

  constructor(private residenceService:ResidenceService , private commonServiceService: CommonServiceService ,private  residenceNewService:ResidenceNewService) { }

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
      residence.address?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteResidence(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette résidence ?')) {
      this.residenceNewService.deleteResidence(id).subscribe(
        () => {
          // Mise à jour locale de la liste des résidences après suppression
          this.listResidences = this.listResidences.filter(residence => residence.id !== id);
          alert('Résidence supprimée avec succès.');
        },
        error => {
          console.error('Erreur lors de la suppression de la résidence :', error);
          alert('Une erreur s\'est produite lors de la suppression. Veuillez réessayer.');
        }
      );
    }
  }
  

  getSameValueOf(){
    this.same = this.commonServiceService.getSameValueOf(this.listResidences , "name" , "El Anber")
  } 

  getResidences(){
    this.residenceNewService.getResidences().subscribe(
      data=>this.listtest=data
    )
  }
  
 
  ngOnInit() {
  this.listResidences = this.residenceService.getAllResidence();
  this.getSameValueOf()
  this.getResidences()
  
  }
}
