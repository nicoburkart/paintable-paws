import { Component, OnInit } from '@angular/core';
import { ArtStyle } from 'src/app/models/art-style.model';
import { ArtStyleService } from 'src/app/core/services/art-style.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  artStyles: ArtStyle[];
  artStylesLoaded: Promise<boolean>;

  constructor(private artStyleService: ArtStyleService) {
    
  }

  ngOnInit(): void {
    this.setArtStyles();
  }

  async setArtStyles() {
    this.artStyles = await this.artStyleService.getArtStyles();
    this.artStylesLoaded = Promise.resolve(true);
  }


}
