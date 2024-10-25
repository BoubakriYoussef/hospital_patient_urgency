import { Component } from '@angular/core';
import { PatientService, Patient } from '../patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css'
})
export class PatientFormComponent {
  patient: Patient = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    birthDate: '',
    birthPlace: '',
    birthCountry: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    address: '',
    urgencyLevel: 0
  };


  constructor(private patientService: PatientService, private router:Router) {
  }

  onSubmit(){
    this.patientService.addPatient(this.patient).subscribe({
      next:(response)=> {
        console.log('Patient ajouté avec succés', response);
        this.router.navigate(['/patients']);
      },
      error: (error)=> {
        console.error('Une erreur est survenue !', error)
      }
    });
  }
}
