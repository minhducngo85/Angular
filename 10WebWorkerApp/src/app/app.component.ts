import { Component } from '@angular/core';
import { PrimeCalculator } from './prime-calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '10WebWorkerApp';

  prime10: number = 0;
  prime10000: number = 0;

    
  nNumber: number = 11000;
  primeNNumber : number = 0;

  find10thPrimeNumber() {
    this.prime10 = PrimeCalculator.findNthPrimeNumber(10);
  }

  find10000thPrimeNumber() { 
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
        this.prime10000 = data;
      };
      worker.postMessage(10000);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  findNthPrimeNumber() {
    console.log(this.nNumber);
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
        this.primeNNumber = data;
      };
      worker.postMessage(this.nNumber);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

}
