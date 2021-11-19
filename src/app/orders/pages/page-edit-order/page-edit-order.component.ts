import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit, OnDestroy {
  public title: string = '[EDIT] Orders';
  public item: any;
  private subscription!: Subscription;

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.ordersService.getItemById(id).subscribe((data) => {
        this.item = data;
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public action(item: Order): void {
    this.ordersService.update(item).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
