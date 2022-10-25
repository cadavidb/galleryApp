import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-slider-images',
  templateUrl: './slider-images.component.html',
  styleUrls: ['./slider-images.component.scss']
})
export class SliderImagesComponent implements OnInit {


  @Input() currentImage!: number;
  @Output() Onclose:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor() {

  }
  ngOnInit(): void {
    console.log(this.currentImage);
  }

  nextImage() {
    this.currentImage++;
    if (this.currentImage >= 10) {
      this.currentImage = 1;
    }
  }

  prevImage() {
    this.currentImage--;
    if (this.currentImage <= 0) {
      this.currentImage = 9
    }
  }
  close(){
    this.Onclose.emit(true);
    this.currentImage=1;
  }

}
