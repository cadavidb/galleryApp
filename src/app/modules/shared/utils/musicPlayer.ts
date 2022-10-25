import { MusicPlugins } from "./songs/musicPlugins";

export class MusicPlayer extends MusicPlugins {
  private isPlaying: boolean = false;
  private currentSong: any;
  private indexSong: number = 0;
  private timeElapsed: number = 0;


  constructor(private songs: any[], public override audioPlayerHtml: any) {
    super(audioPlayerHtml);
    this.currentSong = this.songs[this.indexSong];
  }

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
    this.timeElapsed = 0;
    this.indexSong--;
    if (this.indexSong <= 0) {
      this.indexSong = this.songs.length - 1;
    }
    this.startSong();
  }
  playNextSong() {
    this.isPlaying = false;
    this.timeElapsed = 0;
    this.indexSong++;
    if (this.indexSong >= this.songs.length) {
      this.indexSong = 0;
    }
    this.startSong();
  }
  startSong() {
    this.currentSong = this.songs[this.indexSong];
    this.songAudioPlayer = this.actualSong;
    this.currentTimeAudioPlayer = this.timeElapsed;
    this.audioPlayerHtml.nativeElement.play();
    this.isPlaying = true;
  }

  pauseSong() {
    this.timeElapsed = this.timeAudioPlayer;
    this.audioPlayer.pause();
    this.isPlaying = false;
  }

  get audioPlayer() {
    return this.audioPlayerHtml.nativeElement;
  }

  get timeAudioPlayer() {
    return this.audioPlayer.currentTime;
  }
  get actualSong() {
    return this.currentSong.path;
  }
  get song(){
    return this.currentSong;
  }
  get isPlayingSong(){
    return this.isPlaying;
  }

  set currentTimeAudioPlayer(value: number) {
    this.audioPlayer.currentTime = value;
  }
  set songAudioPlayer(song: string) {
    this.audioPlayer.src = song;
  }
}
