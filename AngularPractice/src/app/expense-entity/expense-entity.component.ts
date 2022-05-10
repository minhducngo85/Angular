import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from './../model/expense-entry';

@Component({
  selector: 'app-expense-entity',
  templateUrl: './expense-entity.component.html',
  styleUrls: ['./expense-entity.component.css']
})
export class ExpenseEntityComponent implements OnInit {
  title: string;
  expenseEntry: ExpenseEntry;

  constructor() { }

  ngOnInit(): void {
    this.title = "Expense Entry";
    this.expenseEntry = {
      id: 1,
      item: "Pizza",
      amount: 21,
      category: "Food",
      location: "Santorini",
      spendOn: new Date(2020, 6, 1, 10, 10, 10),
      createdOn: new Date(2020, 6, 1, 10, 10, 10),
    };
  }

}
