import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-spend',
  templateUrl: './list-spend.component.html',
  styleUrls: ['./list-spend.component.css']
})
export class ListSpendComponent implements OnInit {

  subscription: Subscription;
  budget: number;
  avaliable: number;
  spendList: any[] = [];

  constructor(
    private _budgetService: BudgetService
  ) {
    this.budget = 0;
    this.avaliable = 0;
    this.subscription = this._budgetService.getSpend().subscribe(data => {
      this.avaliable = this.avaliable - data.quantity;
      this.spendList.push(data);
    })
  }

  ngOnInit(): void {
    this.budget = this._budgetService.budget;
    this.avaliable = this._budgetService.rest;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  colored() {
    if(this.budget/4 > this.avaliable) {
      return "alert alert-danger";
    } else if(this.budget/2 > this.avaliable) {
      return "alert alert-warning";
    } else {
      return "alert alert-secondary";
    }
  }

}
