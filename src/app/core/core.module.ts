import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const declarations = [FooterComponent, HeaderComponent];

@NgModule({
  declarations,
  imports: [CommonModule],
  exports: declarations,
})
export class CoreModule {}
