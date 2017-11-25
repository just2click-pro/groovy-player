import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InvokeInPageService } from '../../services/invokeInPage.service';

@Component({
  selector: 'main-container',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  public safeURL: any;
  public play: boolean = false;

  constructor(private _sanitizeDom: DomSanitizer, private _playVideoService: InvokeInPageService) {
    _playVideoService.invokePlayVideo.subscribe(vid => {
      this.playVideo(vid);
    })
  }

  public show () {
    this.play = !this.play;
  }

  public playVideo(vid) {
    let self = this;
    this.safeURL = this._sanitizeDom.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${vid}`);
    let waitASec = setTimeout(() => {
      self.play = true;
    }, 1000);
  }
}
