import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { ArtworkSliderComponent } from './components/artwork-slider/artwork-slider.component';
import { StyleSelectionFormComponent } from './components/style-selection-form/style-selection-form.component';
import { StyleSelectionModalComponent } from './components/style-selection-modal/style-selection-modal.component';

const declarations = [
  ArtworkSliderComponent,
  StyleSelectionFormComponent,
  StyleSelectionModalComponent,
];

@NgModule({
  declarations,
  imports: [CommonModule, SwiperModule, ReactiveFormsModule],
  exports: declarations,
})
export class OrderModule {}
