import { Component } from '@angular/core';
import { Country } from '../../models/country';
import { Countries } from '../../data/countries';
import { InvokeInPageService } from '../../services/invokeInPage.service';

@Component({
  selector: 'top-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Groovy Player';
  private _selected = 0;

  private _nationalities = [];

  constructor(private _countries: Countries, private _selectNationalityService: InvokeInPageService) {
    this._nationalities = _countries.list;
  }

  filterNationality (event) {
    this._selected = event.target.selectedIndex;
    this._selectNationalityService.invokeNationialitySelected.next(this._selected);
  }
}
