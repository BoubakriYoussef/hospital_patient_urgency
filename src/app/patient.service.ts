import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Patient {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  birthDate: string;
  birthPlace: string;
  birthCountry: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  address: string;
  urgencyLevel: number;
}

@Injectable({
  providedIn: 'root'
})

export class PatientService {
  private baseUrl = "http://localhost:8080/api/patients"
  private patientService: any;

  constructor(private http:HttpClient) { }

  addPatient(patient:Patient) : Observable<any>{
    return this.http.post<Patient>(`${this.baseUrl}/add`, patient)
  }

  getPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseUrl}/list`);
  }

  deletePatient(id: number): void {
    this.patientService.deletePatient(id).subscribe(() => {
      this.getPatients(); // Recharger la liste après la suppression
    });
  }
}
