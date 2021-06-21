import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.css']
})
export class EnterBudgetComponent implements OnInit {

  quantity: number;
  quantityIncorrect: boolean;

  constructor(
    private _budgetService: BudgetService,
    private router: Router
  ) { 
    this.quantity = 0;
    this.quantityIncorrect = false;
  }

  ngOnInit(): void {
  }

  add() {
    if(this.quantity > 0) {
      this.quantityIncorrect = false;
      this._budgetService.budget = this.quantity;
      this._budgetService.rest = this.quantity;
      this.router.navigate(['/spends']);
    } else {
      this.quantityIncorrect = true;
    }
  }
}
