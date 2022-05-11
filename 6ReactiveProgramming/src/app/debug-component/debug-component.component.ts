import { Component, OnInit } from '@angular/core';
import { DebugService } from '../service/debug.service';

@Component({
  selector: 'app-debug-component',
  templateUrl: './debug-component.component.html',
  styleUrls: ['./debug-component.component.css']
})
export class DebugComponentComponent implements OnInit {

  constructor(private debugService: DebugService) { } 
  ngOnInit() { 
     this.debugService.info("Debug component gets service from Parent"); 
  } 

}
