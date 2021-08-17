import { NgModule } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';

const declarations = [HeroComponent];

@NgModule({
  declarations,
  imports: [],
  exports: declarations,
})
export class HomeModule {}
