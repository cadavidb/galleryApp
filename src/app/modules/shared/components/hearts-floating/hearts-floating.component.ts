import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageService } from '../../services/images.service';

@Component({
  selector: 'app-hearts-floating',
  templateUrl: './hearts-floating.component.html',
  styleUrls: ['./hearts-floating.component.scss']
})
export class HeartsFloatingComponent implements OnInit {
  hearts:number[]=new Array(10);
  @Output() OnShowMusic:EventEmitter<boolean>=new EventEmitter<boolean>();
  images:string[];
  showSlider:boolean=false;
  currentImage!:number;

  constructor(private imageService:ImageService) {
    this.images=this.imageService.getPathImages();
  }
  ngOnInit(): void {
  }

  showGallery(currentImage:number){
    this.currentImage=currentImage;
    this.OnShowMusic.emit(false);
    this.showSlider=true;
  }
  closeGallery(){
    this.OnShowMusic.emit(true);
    this.showSlider=false;
  }


}
