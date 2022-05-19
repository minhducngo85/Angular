import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilterSortingPaginatorComponent } from './table-filter-sorting-paginator.component';

describe('TableFilterSortingPaginatorComponent', () => {
  let component: TableFilterSortingPaginatorComponent;
  let fixture: ComponentFixture<TableFilterSortingPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFilterSortingPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilterSortingPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
