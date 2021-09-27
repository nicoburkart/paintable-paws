import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { artStyles } from 'src/app/data/art-styles';
import { ArtStyle } from 'src/app/models/art-style.model';



@Component({
  selector: 'order-style-selection-modal',
  templateUrl: './style-selection-modal.component.html',
  styleUrls: ['./style-selection-modal.component.scss'],
})
export class StyleSelectionModalComponent implements OnInit {

  @Input() selectedId: number
  @Output() onCloseEvent = new EventEmitter<ArtStyle>()

  artStyles: ArtStyle[] = artStyles;

  constructor() {}

  ngOnInit(): void {}

  closeModal(artStyle?: ArtStyle) {
    this.onCloseEvent.emit(artStyle)
  }
}
