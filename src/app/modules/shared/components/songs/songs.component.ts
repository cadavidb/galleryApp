import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { debounceTime, filter } from 'rxjs';
import { MusicPlayer } from '../../utils/musicPlayer';
import { songs } from '../../utils/songs/songs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit{

  @ViewChild('audio',{
    static: true
  }) audioPlayerRef: any;
  currentSong: any=songs[0];
  volume: number = 0.5;
  isPlaying = false;
  loadingSong: boolean = true;
  musicPlayer!:MusicPlayer;
  constructor() {
  }
  ngOnInit(): void {
    this.musicPlayer = new MusicPlayer(songs, this.audioPlayerRef);
    this.musicPlayer.state.subscribe((song)=> this.updateSong(song));
  }


  nextSong=()=>{
    this.musicPlayer.playNextSong();
  };

  previouSong=()=>{
    this.musicPlayer.playPreviousSong();

  };

  playSong=()=>{
    this.musicPlayer.playSong();
  };

  updateSong=(state:any)=>{
    const {song,playing,loading}=state;
    this.currentSong = song;
    this.isPlaying = playing;
    this.loadingSong = loading;
  };

  turnUpVolume=()=>this.volume+=0.1;

  turnDownVolume=()=>this.volume-=0.1;




}
