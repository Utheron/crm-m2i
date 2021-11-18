import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public title: string = '[LIST] Clients';
  public headers!: string[];
  public collection$!: Observable<Client[]>;
  public stateClient: string[] = Object.values(StateClient);

  constructor(private clientsService: ClientsService) {
    this.headers = [
      'Name',
      'TotalCaHt',
      'TotalCaTtc',
      'State',
    ];

    this.collection$ = this.clientsService.collection$;
  }

  ngOnInit(): void {}

  public changeState(item: Client, event: any) {
    const state = event.target.value;

    this.clientsService.changeState(item, state).subscribe(data => {
      Object.assign(item, data);
    });
  }
}
