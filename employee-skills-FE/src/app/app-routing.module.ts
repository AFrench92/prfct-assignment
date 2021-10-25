import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTalentComponent } from './add-talent/add-talent.component';
import { FindTalentComponent } from './find-talent/find-talent.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TalentPageComponent } from './talent-page/talent-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-talent', component: AddTalentComponent },
  { path: 'find-talent', component: FindTalentComponent },
  { path: 'talent-page', component: TalentPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
