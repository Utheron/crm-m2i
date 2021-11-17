import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public v!: number;

  constructor(private version: VersionService) {
    this.version.number$.subscribe((num) => {
      this.v = num;
    });
  }

  ngOnInit(): void {}

  public increment() {
    this.version.incrementVersion();
  }

  public decrement() {
    this.version.decrementVersion();
  }
}
