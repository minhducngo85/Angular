import { Router, ActivatedRoute } from '@angular/router';
import { ExpenseEntryService } from './../servcice/expense-entry.service';
import { ExpenseEntry } from './../model/expense-entry';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css']
})
export class EditEntryComponent implements OnInit {
  formData: FormGroup;
  selectedId: number;
  expenseEntry: ExpenseEntry;

  title = "Add New Expense";

  constructor(private service: ExpenseEntryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // init edit form
    this.formData = new FormGroup({
      id: new FormControl(),
      item: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      category: new FormControl(),
      location: new FormControl(),
      spendOn: new FormControl(),
    });

    // get selected Id from uri param
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));

    // get item details form data base
    if (this.selectedId != null && this.selectedId > 0) {
      this.service.getExpenseEntry(this.selectedId).subscribe(data => {
        this.expenseEntry = data;
        this.formData.controls['id'].setValue(this.expenseEntry.id);
        this.formData.controls['item'].setValue(this.expenseEntry.item);
        this.formData.controls['amount'].setValue(this.expenseEntry.amount);
        this.formData.controls['category'].setValue(this.expenseEntry.category);
        this.formData.controls['location'].setValue(this.expenseEntry.location);
        this.formData.controls['spendOn'].setValue(this.expenseEntry.spendOn);
        this.title = "Edit Expense: " + this.expenseEntry.item;
      });
    }
  }

  goToList() {
    this.router.navigate(['/expenses']);
  }

  /**
   * the listener of form submit action
   * @param data form data
   */
  onClickSubmit(data: any) {

    let entry: ExpenseEntry = {
      id: data.id,
      item: data.item,
      amount: data.amount,
      category: data.category,
      location: data.location,
      spendOn: data.spendOn,
      createdOn: this.expenseEntry ? this.expenseEntry.createdOn : new Date()
    };
    console.log(entry);
    if (entry.id == null || entry.id == 0) {
      console.log('add fn fired');
      this.service.addExpenseEntry(entry).subscribe(res => { console.log(data); this.router.navigate(['/expenses']); });
    } else {
      console.log('edit fn fired');
      this.service.updateExpenseEntry(entry).subscribe(data => { console.log(data); this.router.navigate(['/expenses']); });
    }
  }

}
