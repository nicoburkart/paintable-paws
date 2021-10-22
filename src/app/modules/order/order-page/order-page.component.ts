import { Component, Input, OnInit } from '@angular/core';
import { ArtStyle } from 'src/app/models/art-style.model';
import { ArtStyleService } from 'src/app/core/services/art-style.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  @Input() artStyle: ArtStyle;
  
  artStyleLoaded: Promise<boolean>;

  constructor(private artStyleService: ArtStyleService) { }

  ngOnInit(): void {
    if (!this.artStyle) {
      console.log("setting artstyle")
      this.setArtStyle()
    } else {
      this.artStyleLoaded = Promise.resolve(true)
    }
  }

  async setArtStyle() {
    const artStyles = await this.artStyleService.getArtStyles()
    this.artStyle = artStyles[0]
    this.artStyleLoaded = Promise.resolve(true)
  }
}
