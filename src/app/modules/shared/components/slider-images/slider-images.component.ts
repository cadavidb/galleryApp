import { Component, EventEmitter, Output } from '@angular/core';
import { ImageService } from '../../services/images.service';

@Component({
  selector: 'app-slider-images',
  templateUrl: './slider-images.component.html',
  styleUrls: ['./slider-images.component.scss']
})
export class SliderImagesComponent {


  currentImage = 1;
  @Output() Onclose:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor() {}

  nextImage() {
    this.currentImage++;
    if (this.currentImage >= 10) {
      this.currentImage = 1;
    }
  }

  prevImage() {
    this.currentImage--;
    if (this.currentImage < 0) {
      this.currentImage = 9
    }
  }
  close(){
    this.Onclose.emit(true);
    this.currentImage=1;
  }

}
