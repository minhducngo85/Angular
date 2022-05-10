import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseEntityComponent } from './expense-entity.component';

describe('ExpenseEntityComponent', () => {
  let component: ExpenseEntityComponent;
  let fixture: ComponentFixture<ExpenseEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
