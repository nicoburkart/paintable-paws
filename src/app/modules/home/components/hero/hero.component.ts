import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.observer.observe(document.getElementById('hero') as Element);
  }

  callToAction() {}

  options = {
    root: document.querySelector('#main'),
    rootMargin: '0px',
    threshold: 0.9,
  };

  observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.getElementsByTagName('nav')[0].classList.add('transparent');
      } else {
        document.getElementsByTagName('nav')[0].classList.remove('transparent');
      }
    });
  }, this.options);
}
