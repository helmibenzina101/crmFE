import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './client/create/create.component';
import { EditComponent } from './client/edit/edit.component';
import { HomeComponent } from './client/home/home.component';

const routes: Routes = [
  {
    path: 'client/home',
    component: HomeComponent,
  },
  {
    path:'client/edit/:id',
    component: EditComponent
  },
  {
    path:'client/create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
