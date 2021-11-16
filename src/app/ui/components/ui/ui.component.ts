import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  public closed: boolean;

  constructor() {
    this.closed = true;
  }

  ngOnInit(): void {}

  public toggle(): void {
    this.closed = !this.closed;
  }
}
