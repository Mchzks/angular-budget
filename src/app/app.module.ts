import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpendsComponent } from './components/spends/spends.component';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { EnterSpendComponent } from './components/spends/enter-spend/enter-spend.component';
import { ListSpendComponent } from './components/spends/list-spend/list-spend.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SpendsComponent,
    EnterBudgetComponent,
    EnterSpendComponent,
    ListSpendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
