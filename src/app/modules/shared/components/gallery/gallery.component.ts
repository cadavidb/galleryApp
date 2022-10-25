import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  showPlayer:boolean = true;
  constructor() {}

  showMusicPlayer(show:boolean){
    this.showPlayer=show;
  }
}
