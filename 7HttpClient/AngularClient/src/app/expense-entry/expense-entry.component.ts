import { ExpenseEntryService } from '../servcice/expense-entry.service';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ExpenseEntry } from '../model/expense-entry';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {
  title: string;
  expenseEntry: ExpenseEntry = {} as ExpenseEntry;
  expenseEntry$: Observable<ExpenseEntry>;
  selectedId: number;

  constructor(private restService: ExpenseEntryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = "Expense Entry";
    this.expenseEntry$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.restService.getExpenseEntry(this.selectedId);
      }));

    this.expenseEntry$.subscribe((data) => this.expenseEntry = data);
  }

  goToList() {
    this.router.navigate(['/expenses']);
  }

  goEditEntry() {
    this.router.navigate(['/expenses/edit/' + this.selectedId]);
  }

}
