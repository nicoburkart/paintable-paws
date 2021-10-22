import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArtStyle } from 'src/app/models/art-style.model';
import { ArtStyleService } from 'src/app/core/services/art-style.service';



@Component({
  selector: 'order-style-selection-modal',
  templateUrl: './style-selection-modal.component.html',
  styleUrls: ['./style-selection-modal.component.scss'],
})
export class StyleSelectionModalComponent implements OnInit {

  @Input() selectedId: number;
  @Output() onCloseEvent = new EventEmitter<ArtStyle>()

  artStyles: ArtStyle[] = []
  artStylesLoaded: Promise<boolean>;

  constructor(private artStyleService: ArtStyleService) {}

  ngOnInit(): void {
    this.setArtStyles()
  }

  async setArtStyles() {
    this.artStyles = await this.artStyleService.getArtStyles();
    this.artStylesLoaded = Promise.resolve(true);
  }
  

  closeModal(artStyle?: ArtStyle) {
    this.onCloseEvent.emit(artStyle)
  }
}
