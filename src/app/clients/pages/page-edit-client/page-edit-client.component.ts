import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss'],
})
export class PageEditClientComponent implements OnInit {
  public title: string = '[EDIT] Clients';

  constructor() {}

  ngOnInit(): void {}
}
