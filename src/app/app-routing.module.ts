import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';


const routes: Routes = [
  // {
  //   path: 'about',
  //   component: HomeComponent
  // },
  // {
  //   path: 'education',
  //   component: EducationComponent
  // },
  // {s
  //   path: '',
  //   component: HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
