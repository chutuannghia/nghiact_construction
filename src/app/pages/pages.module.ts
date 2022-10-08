import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { ThietkeComponent } from './thietke/thietke.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SelectedComponent } from './selected/selected.component';



@NgModule({
  declarations: [
    HomeComponent,
    ThietkeComponent,
    SliderComponent,
    SelectedComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutsModule,FontAwesomeModule,
    CarouselModule,
  ]
})
export class PagesModule { }
