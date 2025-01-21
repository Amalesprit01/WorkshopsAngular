import { Component } from '@angular/core';
import { LogService } from '../service/log.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  constructor(private logService:LogService) { }

  ngOnInit(): void {
    // Utilisation du service
    this.logService.log('HomeComponent chargé avec succès.');
    this.logService.warn('Ceci est un message d\'avertissement pour HomeComponent.');
    this.logService.error('Une erreur simulée dans HomeComponent.');
  }

}
