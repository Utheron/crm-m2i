import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title: string = '[LIST] Orders';
  public headers!: string[];
  public collection$!: Observable<Order[]>;
  public stateOrder: string[] = Object.values(StateOrder);

  constructor(private ordersService: OrdersService) {
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State',
    ];

    this.collection$ = this.ordersService.collection$;
  }

  ngOnInit(): void {}
}
