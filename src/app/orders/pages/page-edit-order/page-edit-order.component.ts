import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public title: string = '[EDIT] Orders';

  constructor() {}

  ngOnInit(): void {}
}
