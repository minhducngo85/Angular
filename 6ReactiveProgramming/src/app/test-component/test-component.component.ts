import { DebugService } from './../../../../AngularPractice/src/app/servcice/debug.service';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { filter, from, fromEvent, interval, map, observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
  providers : [DebugService] // register Debugservice under this component
})
export class TestComponentComponent implements OnInit, AfterViewInit {

  title = 'Reactive programming example:'
  // observer
  numbers: number[] = [];
  val1: number = 0;

  // filter fn
  filteredNumbers: number[] = [];
  val2: number = 0;

  // map and pipe function
  processedNumbers: number[] = [];
  val3: number = 0;

  // api call
  apiMessage: string = "";

  // for fromEvent
  counter: number = 0;

  constructor(private debugService : DebugService) { }

  ngOnInit(): void {
    this.debugService.info("Test Component initialized!")
    // Observable stream of data Observable<number>
    // const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 
    // const numbers$ = range(1,10); 
    const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    //observer
    const observer = {
      next: (num: number) => {
        this.numbers.push(num);
        this.val1 += num;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log("Observation completed!");
      }
    };
    numbers$.subscribe(observer);

    /** filterFn */
    const filterFn = filter((num: number) => num > 5);
    const ftNumbers$ = filterFn(numbers$);
    ftNumbers$.subscribe((num: number) => {
      this.val2 += num;
      this.filteredNumbers.push(num);
    });

    // map − Enables to map the data stream using callback function and to change the data stream itself.
    const mapFn = map((num: number) => num + num);
    const processedNumbers$ = numbers$.pipe(filterFn, mapFn);
    processedNumbers$.subscribe((num: number) => { this.processedNumbers.push(num); this.val3 += num });

    // ajax
    const api$ = ajax({
      url: 'https://httpbin.org/delay/1',
      method: 'POST',
      headers: { 'Content-Type': 'application/text' },
      body: "Hello From API Call"
    });
    api$.subscribe((res: any) => this.apiMessage = res.response.data);

    let index = 1;
    interval(10000).subscribe(x => {
      index++;
      const api$ = ajax({
        url: 'https://httpbin.org/delay/1',
        method: 'POST',
        headers: { 'Content-Type': 'application/text' },
        body: "Hello From API Call " + index
      });
      api$.subscribe((res: any) => this.apiMessage = res.response.data);
    })
  }

  @ViewChild('filterInput')
  filterElementRef!: ElementRef;

  ngAfterViewInit(): void {
    //fromEvent
    const clickEvent$ = fromEvent(this.filterElementRef.nativeElement, 'click');
    clickEvent$.subscribe(() => this.counter++);
  }

}
