import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private urlApi = environment.urlApi;
  public collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map((response) => {
        return response.map((obj) => {
          return new Order(obj);
        });
      })
    );
  }

  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  public delete(id: number) {
    return this.http.delete<Order>(`${this.urlApi}/orders/${id}`);
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order({ ...item });
    obj.state = state;
    return this.update(obj);
  }

  public getItemById(id: number) {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }
}
