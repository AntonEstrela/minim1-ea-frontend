import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { BrotesComponent } from './brotes/brotes.component';


const routes: Routes = [
  { path: '', redirectTo: '/brotes', pathMatch: 'full' },
  { path: 'brotes', component: BrotesComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
