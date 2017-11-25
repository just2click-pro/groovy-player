import { Component } from '@angular/core';

import { Artists } from '../../data/artists'
import { Artist } from '../../models/artist';
import { InvokeInPageService } from '../../services/invokeInPage.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  private _artistList: Artist[];
  private _displayArtists: any;
  private _toggledImage = 0;
  title = 'Favorite Artists';

  constructor (private _artists: Artists, private _invokeInPageService: InvokeInPageService) {
    let self = this;
    this._artistList = _artists.list;
    this._displayArtists = [..._artists.list];

    _invokeInPageService.invokeNationialitySelected.subscribe( id => {
      self.selectedNationality(id);
    })
  }

  playSong (url) {
    this._invokeInPageService.playVideo(url);
  }

  selectedNationality (id) {
    this._displayArtists = [...this._artists.list]; // Reset any selection
    if (id != 0) {  // Reset any selection
      this._displayArtists = this._displayArtists.filter( artist => {
        return (artist.country.id == id)
      });
    }
  }

  toggleImage(index) {
    if (this._toggledImage === index) { 
      this._toggledImage = 0; 
    } else {
      this._toggledImage = index;
    }
  }
}
