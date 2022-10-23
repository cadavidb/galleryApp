import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CoreAppModule } from '../core/core.module';
import { ImageService } from './services/images.service';
import { AnimatedBackgroudComponent } from './components/animated-backgroud/animated-backgroud.component';
import { HeartsFloatingComponent } from './components/hearts-floating/hearts-floating.component';
import { SongsComponent } from './components/songs/songs.component';



@NgModule({
  declarations: [
    GalleryComponent,
    AnimatedBackgroudComponent,
    HeartsFloatingComponent,
    SongsComponent
  ],
  imports: [
    CoreAppModule,
    CommonModule
  ],
  exports:[
    GalleryComponent
  ],
  providers: [
    ImageService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
