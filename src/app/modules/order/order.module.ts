import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { ArtworkSliderComponent } from './components/artwork-slider/artwork-slider.component';
import { StyleSelectionFormComponent } from './components/style-selection-form/style-selection-form.component';

const declarations = [ArtworkSliderComponent, StyleSelectionFormComponent];

@NgModule({
  declarations,
  imports: [CommonModule, SwiperModule, ReactiveFormsModule],
  exports: declarations,
})
export class OrderModule {}
