import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private urlApi = environment.urlApi;
  public collection$: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map(response => {
        return response.map(obj => {
          return new Order(obj);
        })
      })
    );
  }
}
