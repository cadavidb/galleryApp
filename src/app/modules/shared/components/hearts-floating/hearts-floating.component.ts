import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/images.service';

@Component({
  selector: 'app-hearts-floating',
  templateUrl: './hearts-floating.component.html',
  styleUrls: ['./hearts-floating.component.scss']
})
export class HeartsFloatingComponent implements OnInit {
  hearts:number[]=new Array(10);
  images:string[];

  constructor(private imageService:ImageService) {
    this.images=this.imageService.getPathImages();
  }
  ngOnInit(): void {
  }


}
