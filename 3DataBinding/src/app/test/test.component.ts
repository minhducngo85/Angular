import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  appName = "My Data Bidning Apllication - Test Component";
  userName: string = "Minh Duc";

  myCSSClass = "red";
  applyCSSClass = true;
  myStyleColor = 'brown';

  constructor() { }

  ngOnInit(): void {
  }

  showData($event: any) {
    console.log("Button is clicked!");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

}
