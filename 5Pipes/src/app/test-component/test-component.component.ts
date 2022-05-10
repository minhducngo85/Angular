import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  presentDate = new Date();
  price: number = 20000;
  decimalNum1: number = 8.754634542;
  decimalNum2: number = 7.34;
  percentNum: number = 0.8234;
  jsonDate = { id: 1, name: { fisrtName: 'Minh Duc', lastName: 'Ngo' } };

  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * built-in pipe
   */
  timeChange = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000); 
 }); 

}
