import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ImageService } from '../../services/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images:string[];
  constructor(private imageService:ImageService) {
    this.images=this.imageService.getPathImages();
  }

  ngOnInit(): void {

  }

}
