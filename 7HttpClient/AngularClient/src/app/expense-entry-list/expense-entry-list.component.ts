import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExpenseEntry } from './../model/expense-entry';
import { DebugService } from './../servcice/debug.service';
import { ExpenseEntryService } from './../servcice/expense-entry.service';

@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.css']
})
export class ExpenseEntryListComponent implements AfterViewInit, OnInit {
  title: string;
  /** For HTML table */
  expenseEntries: ExpenseEntry[] = [];

  /** Material data table */
  displayedColumns: string[] = ['item', 'amount', 'category', 'location', 'spendOn', 'view', 'edit', 'delete'];
  dataSource: MatTableDataSource<ExpenseEntry>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /**
   * inject debug service
   */
  constructor(private debugService: DebugService, private restService: ExpenseEntryService) {

  }

  /**
   * on view init method
   */
  ngOnInit() {
    this.debugService.info("Expense Entry List component initialized");
    this.title = "Expense Entry List";
    //this.expenseEntries = this.getMockExpenseEntries();
    this.getExpenentiresFromApi();
  }

  /**
   * after view initialized
   */
  ngAfterViewInit() {
    console.log("ngAfterViewInit")
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getExpenentiresFromApi(): void {
    this.restService.getExpenseEntires().subscribe((data: ExpenseEntry[]) => {
      this.expenseEntries = data;

      // set data source
      this.dataSource = new MatTableDataSource(this.expenseEntries);
      // bind paginator ad sort components
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deleteExpenseEntry(evt: { preventDefault: () => void; }, id: number) {
    evt.preventDefault();
    // conform dialog
    if (confirm("Are you sure to delete the entry?")) {
      this.restService.deleteExpenseEntry(id)
        .subscribe(data => console.log(data));
      this.getExpenentiresFromApi();
    }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
