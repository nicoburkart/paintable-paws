import { NgModule } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';

const declarations = [HeroComponent, HowItWorksComponent];

@NgModule({
  declarations,
  imports: [],
  exports: declarations,
})
export class HomeModule {}
