import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budget: number;
  rest: number;
  private spend$ = new Subject<any>();

  constructor() {
    this.budget = 0;
    this.rest = 0;
  }

  addSpend(spend: any){
    this.rest = this.rest - spend.quantity;
    this.spend$.next(spend);
  }

  getSpend(): Observable<any> {
    return this.spend$.asObservable();
  }
}
