import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientListComponent} from './patient-list/patient-list.component';
import {PatientFormComponent} from './patient-form/patient-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
  {path: 'patients', component:PatientListComponent},
  {path:'add-patient', component:PatientFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
