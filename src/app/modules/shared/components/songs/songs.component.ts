import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MusicPlayer } from '../../utils/musicPlayer';
import { songs } from '../../utils/songs/songs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements AfterViewInit {

  @ViewChild('audio') audioPlayerRef: any;
  currentSong: any=songs[0];
  volume: number = 0.5;
  isPlaying = false;
  musicPlayer!:MusicPlayer;
  constructor() {}
  ngAfterViewInit(): void {
    this.musicPlayer = new MusicPlayer(songs, this.audioPlayerRef);
  }

  nextSong=()=>{
    this.musicPlayer.playNextSong();
    this.updateSong();
  };

  previouSong=()=>{
    this.musicPlayer.playPreviousSong();
    this.updateSong();
  };

  playSong=()=>{
    this.musicPlayer.playSong();
    this.updateSong();
  };

  updateSong=()=>{
    this.currentSong = this.musicPlayer.song;
    this.isPlaying = this.musicPlayer.isPlayingSong;
  };

  turnUpVolume=()=>this.volume+=0.1;

  turnDownVolume=()=>this.volume-=0.1;


}
