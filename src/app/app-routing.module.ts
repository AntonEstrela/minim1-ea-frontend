import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrotesComponent } from './brotes/brotes.component';


const routes: Routes = [
  { path: '', redirectTo: '/brotes', pathMatch: 'full' },
  { path: 'brotes', component: BrotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
