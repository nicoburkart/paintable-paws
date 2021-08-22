import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'order-style-selection-form',
  templateUrl: './style-selection-form.component.html',
  styleUrls: ['./style-selection-form.component.scss'],
})
export class StyleSelectionFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  order = new FormGroup({
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
}
