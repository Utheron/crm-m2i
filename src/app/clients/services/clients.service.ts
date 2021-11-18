import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private urlApi = environment.urlApi;
  public collection$!: Observable<Client[]>;

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Client[]>(`${this.urlApi}/clients`).pipe(
      map(response => {
        return response.map(obj => {
          return new Client(obj);
        })
      })
    );
  }

    // change state item
    public changeState(item: Client, state: StateClient): Observable<Client> {
      const obj = new Client({...item});
      obj.state = state;
      return this.update(obj);
    }

    // update item in collection
    public update(item: Client): Observable<Client> {
      return this.http.put<Client>(`${this.urlApi}/clients/${item.id}`, item);
    }
}
