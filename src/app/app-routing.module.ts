import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { SpendsComponent } from './components/spends/spends.component';

const routes: Routes = [
  { path: '', redirectTo: 'enter-budget', pathMatch: 'full' },
  { path: 'enter-budget', component: EnterBudgetComponent },
  { path: 'spends', component: SpendsComponent },
  { path: '**', redirectTo: 'enter-budget', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
