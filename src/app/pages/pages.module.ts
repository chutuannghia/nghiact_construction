import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { ThietkeComponent } from './thietke/thietke.component';


@NgModule({
  declarations: [
    HomeComponent,
    ThietkeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutsModule
  ]
})
export class PagesModule { }
