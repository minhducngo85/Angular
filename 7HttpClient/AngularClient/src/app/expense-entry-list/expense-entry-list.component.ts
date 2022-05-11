import { ExpenseEntryService } from './../servcice/expense-entry.service';
import { DebugService } from './../servcice/debug.service';
import { ExpenseEntry } from './../model/expense-entry';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.css']
})
export class ExpenseEntryListComponent implements OnInit {
  title: string;
  expenseEntries: ExpenseEntry[] = [];

  displayedColumns: string[] = ['item', 'amount', 'category', 'location', 'spendOn', 'view'];

  /**
   * inject debug service
   */
  constructor(private debugService: DebugService,
    private restService: ExpenseEntryService) {

  }

  ngOnInit(): void {
    this.debugService.info("Expense Entry List component initialized");
    this.title = "Expense Entry List";
    //this.expenseEntries = this.getMockExpenseEntries();
    this.getExpenentiresFromApi();
  }

  getExpenentiresFromApi(): void {
    this.restService.getExpenseEntires().subscribe((data : ExpenseEntry[]) => {
      this.expenseEntries = data;
    });
  }

  /**
   * 
   * @returns list of mocking objects
   */
  getMockExpenseEntries(): ExpenseEntry[] {
    let mockExpenseEntries: ExpenseEntry[] = [
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "Mcdonald",
        spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10)
      },
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "KFC",
        spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10)
      },
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "Mcdonald",
        spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10)
      },
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "KFC",
        spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10)
      },
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "KFC",
        spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10)
      }
    ];
    return mockExpenseEntries;
  }

}
