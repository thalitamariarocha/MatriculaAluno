import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private editalSubject = new BehaviorSubject<string | null>(null);
  edital$ = this.editalSubject.asObservable();

  setEdital(edital: string) {
    this.editalSubject.next(edital);
  }
}
