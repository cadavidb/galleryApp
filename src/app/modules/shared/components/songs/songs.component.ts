import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit,AfterViewInit {
  @ViewChild('song') audioPlayer:any;
  songs=[
    'assets/songs/always.mp3',
    'assets/songs/deep.mp3',
    'assets/songs/love.mp3',
  ]
  currentSong:string;
  constructor() {
    this.currentSong=this.songs[this.generateRandomSong()];
  }
  ngAfterViewInit(): void {

    this.audioPlayer.nativeElement.click();
    const audio= new Audio(this.currentSong);
    audio.play();
  }

  ngOnInit(): void {
    console.log(this.currentSong);
  }
  generateRandomSong():number{
    return Math.floor(Math.random()*this.songs.length);
  }
  private ensureSongPlay(): void{

    const audioPlayer=this.audioPlayer.nativeElement;

    console.log(audioPlayer);

    // if(!audioPlayer) return;

    // if(promise !== undefined){
    //     promise.then(() => {

    //     }).catch((error:any) => {
    //         this.audioPlayer.muted=true;
    //         this.audioPlayer.play();
    //     });
    // }
}

  // nextSong(){
  //   this.currentSong++;
  //   if(this.currentSong>=this.songs.length){
  //     this.currentSong=0;
  //   }
  // }

}
