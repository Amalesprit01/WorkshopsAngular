import { Component } from '@angular/core';
import { User } from '../core/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
  user: User = new User();
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisation du formulaire
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@gmail.com$')]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9]{8,}$') // Au moins 8 caractères
        ]
      ],
      profession: [''],
      accountCategory: ['Customer', Validators.required],
      picture: ['']
    });
  }

  onSave() {
    if (this.userForm.valid) {
      console.log('User Data:', this.userForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }

}
