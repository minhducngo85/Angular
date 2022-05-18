import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshoppingcartComponent } from './myshoppingcart.component';

describe('MyshoppingcartComponent', () => {
  let component: MyshoppingcartComponent;
  let fixture: ComponentFixture<MyshoppingcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyshoppingcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyshoppingcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
