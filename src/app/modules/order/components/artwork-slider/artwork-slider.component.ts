import { Component, OnInit } from '@angular/core';

import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'order-artwork-slider',
  templateUrl: './artwork-slider.component.html',
  styleUrls: ['./artwork-slider.component.scss'],
})
export class ArtworkSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
