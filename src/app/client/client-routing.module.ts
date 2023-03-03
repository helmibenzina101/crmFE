import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientModule } from './client.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
const routes: Routes = [
  {
    path: 'client/home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ClientModule
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule { }


