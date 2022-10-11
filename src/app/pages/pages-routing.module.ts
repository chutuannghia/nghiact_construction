import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentComponent } from './apartment/apartment.component';
import { HomeComponent } from './home/home.component';
import { ProjectfbComponent } from './projectfb/projectfb.component';
import { SelectedComponent } from './selected/selected.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { TownhouseComponent } from './townhouse/townhouse.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'selected',component:SelectedComponent,
  },
  {
    path:'townhouse',component:TownhouseComponent,
  },
  {
    path:'showroom',component:ShowroomComponent
  },
  {
    path:'projectfb',component:ProjectfbComponent
  },
  {
    path:'apartment',component:ApartmentComponent
  },
  {
    path:'**',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
