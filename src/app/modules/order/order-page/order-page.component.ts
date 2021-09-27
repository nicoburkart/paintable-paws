import { Component, Input, OnInit } from '@angular/core';
import { artStyles } from 'src/app/data/art-styles';
import { ArtStyle } from 'src/app/models/art-style.model';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  @Input() artStyle: ArtStyle = artStyles[0]  

  constructor() { }

  ngOnInit(): void {
  }

}
