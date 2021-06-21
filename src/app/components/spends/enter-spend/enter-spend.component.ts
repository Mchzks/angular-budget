import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-spend',
  templateUrl: './enter-spend.component.html',
  styleUrls: ['./enter-spend.component.css']
})
export class EnterSpendComponent implements OnInit {

  name: string;
  quantity: number;
  formIncorrect: boolean;
  textIncorrect: string;

  constructor(
    private _budgetService: BudgetService
  ) { 
    this.name = '';
    this.quantity = 0;
    this.formIncorrect = false;
    this.textIncorrect = '';
  }

  ngOnInit(): void {
  }
  
  add() {
    if(this.quantity > this._budgetService.rest){
      this.formIncorrect = true;
      this.textIncorrect = "Quantity cannot be superior to budget.";
      return;
    }
    if(this.name === '' || this.quantity <= 0) {
      this.formIncorrect = true;
      this.textIncorrect = "Some fields are incorrect.";
    } else {
      const spend = {
        name: this.name,
        quantity: this.quantity
      }
      this._budgetService.addSpend(spend);
      this.formIncorrect = false;
      this.name = '';
      this.quantity = 0;
    }
  }

}
