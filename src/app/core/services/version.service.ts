import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public number$ = new BehaviorSubject(0);

  constructor() {}

  public incrementVersion(): void {
    this.number$.next(this.number$.value + 1);
  }

  public decrementVersion(): void {
    this.number$.next(this.number$.value - 1);
  }
}
