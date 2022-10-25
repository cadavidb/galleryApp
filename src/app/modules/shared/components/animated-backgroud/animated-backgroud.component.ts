import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-animated-backgroud',
  templateUrl: './animated-backgroud.component.html',
  styleUrls: ['./animated-backgroud.component.scss'],
})
export class AnimatedBackgroudComponent implements OnInit {
  watcher: Subscription;
  constructor(public mediaObserver: MediaObserver) {
    this.watcher = mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change) => {
        const media = change.mqAlias;
        if (media == 'lg' || media == 'xl' || media == 'xxl') {
          this.lazyLoadLibrary();
        }
      });
  }

  ngOnInit(): void {
    this.lazyLoadLibrary();
  }

  lazyLoadLibrary() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://unpkg.com/css-doodle@0.30.4/css-doodle.min.js';
    script.async = true;
    //cargar en el head
    document.head.appendChild(script);

    //document.body.appendChild(script);
  }
}
