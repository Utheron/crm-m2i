import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-nav',
  templateUrl: './icon-nav.component.html',
  styleUrls: ['./icon-nav.component.scss'],
})
export class IconNavComponent implements OnInit {
  public myIcon = faBars;
  public toggled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public toggle(): void {
    this.myIcon = this.toggled ? faBars : faTimes;
    this.toggled = !this.toggled;
  }
}
