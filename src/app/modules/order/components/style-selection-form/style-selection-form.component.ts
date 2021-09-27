import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { artStyles } from 'src/app/data/art-styles';
import { ArtStyle } from 'src/app/models/art-style.model';

@Component({
  selector: 'order-style-selection-form',
  templateUrl: './style-selection-form.component.html',
  styleUrls: ['./style-selection-form.component.scss'],
})
export class StyleSelectionFormComponent implements OnInit {

  @Input() artStyle: ArtStyle = artStyles[0];
  @Output() artStyleChange = new EventEmitter<ArtStyle>();

  modalVisible = false;

  constructor() {}

  ngOnInit(): void {}

  order = new FormGroup({
    artStyle: new FormControl(this.artStyle.name),
    imageFile: new FormControl(''),
    canvasSize: new FormControl('8x10'),
    email: new FormControl(''),
  });

  uploadedImage;

  displayImage(event: Event) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.uploadedImage = e.target.result;
    };
    reader.readAsDataURL((event.target as HTMLInputElement).files[0]);
  }

  openModal() {
    this.modalVisible = true
  }

  handleModal(artStyle?: ArtStyle) {
    if(artStyle) {
      this.artStyle = artStyle
      this.artStyleChange.emit(artStyle)
    } else {
      this.modalVisible = !this.modalVisible
    }
    
  }

}
