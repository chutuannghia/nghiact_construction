import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,FontAwesomeModule,RouterModule,CarouselModule,
  ],
  exports:[HeaderComponent,
    FooterComponent,
    LayoutComponent]
})
export class LayoutsModule { }
