import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from 'src/app/service/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  residence = { id:0, name: '', address: '', city: '', status: '' };
  isUpdateMode = false;

  constructor(private route: ActivatedRoute, private router: Router, private residenceService :ResidenceService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isUpdateMode = true;
      this.residence.id = +id;
      // TODO: Fetch residence details by ID and populate the form
    }
  }

  save(): void {
    if (this.isUpdateMode) {
      // TODO: Update the residence
      console.log('Updating residence:', this.residence);
    } else {
      // TODO: Add a new residence
      console.log('Adding new residence:', this.residence);
    }
    this.router.navigate(['/residence-details']);
  }
}
