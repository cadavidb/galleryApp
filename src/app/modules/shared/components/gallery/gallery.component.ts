import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ImageService } from '../../services/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @ViewChild('audio') audioPlayerRef: any;
  images: string[];
  currentSong!: any;
  isPlaying: boolean = false;
  indexSong: number = 0;
  timeElapsed:number=0;

  songs = [
    {
      name: 'Always',
      cover: 'assets/songs/covers/bon-jovi.jpg',
      path: 'assets/songs/always.mp3',
      autor: 'Bon Jovi',
    },
    {
      name: 'How deep is your love',
      cover: 'assets/songs/covers/how.jpg',
      path: 'assets/songs/deep.mp3',
      autor: 'Bee Gees',
    },
    {
      name: 'Too much heaven',
      cover: 'assets/songs/covers/heaven.jpg',
      path: 'assets/songs/love.mp3',
      autor: 'Bee Gees',
    },
  ];
  constructor(private imageService: ImageService) {
    this.images = this.imageService.getPathImages();
    this.currentSong = this.songs[0];
  }
  ngOnInit(): void {}
  playSong() {
    if (this.isPlaying) {
      this.pauseSong();
    } else {
      this.startSong();
    }
  }

  generateRandomSong(): number {
    return Math.floor(Math.random() * this.songs.length);
  }

  playPreviousSong() {
    this.isPlaying = false;
    this.timeElapsed=0;
    this.indexSong--;
    if (this.indexSong <= 0) {
      this.indexSong = this.songs.length - 1;
    }
    this.startSong();
  }
  playNextSong() {
    this.isPlaying = false;
    this.timeElapsed=0;
    this.indexSong++;
    if (this.indexSong >= this.songs.length) {
      this.indexSong = 0;
    }
    this.startSong();
  }
  startSong(){
    this.currentSong = this.songs[this.indexSong];
    this.audioPlayerRef.nativeElement.src = this.currentSong.path;
    this.audioPlayerRef.nativeElement.currentTime=this.timeElapsed;
    this.audioPlayerRef.nativeElement.play().then(() => {
      this.isPlaying = true;
    });
  }

  pauseSong() {
    this.timeElapsed=this.audioPlayerRef.nativeElement.currentTime;
    this.audioPlayerRef.nativeElement.pause();
    this.isPlaying = false;
  }
}
