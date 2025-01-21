import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence.model';
import { ResidenceService } from 'src/app/service/residence.service';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residenceId!: number;
  residenceDetails!:Residence| undefined;
  constructor(private route: ActivatedRoute ,private residenceService:ResidenceService,private router: Router) {

  }

  ngOnInit(): void {
    // Ajout d'un type explicite pour params
    this.route.params.subscribe((params: { [key: string]: string }) => { 
    this.currentResidence(+params['id'])
      });
    
  }
  currentResidence(id : number) {
    this.residenceDetails=this.residenceService.getResidenceById(id)??this.residenceService.getResidenceById(1)
    console.log(this.residenceService.getResidenceById(id))
  }

  navigateResidence(direction: number): void {
    if(this.residenceDetails && this.residenceDetails.id){
      const id = this.residenceDetails.id +direction;
      this.router.navigate(['/residences', id]);
    }
    

  }
  navigateToAdd(): void {
    this.router.navigate(['/add-residence']);
  }

  navigateToUpdate(residenceId: number): void {
    this.router.navigate(['/add-residence', { id: residenceId }]);
  }
}
