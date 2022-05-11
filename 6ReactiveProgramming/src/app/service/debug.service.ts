import { Injectable } from '@angular/core';

/**
 * remove scopr providedIn root module
 */
@Injectable()
export class DebugService {

  constructor() { }

  info(message : String) : void {     
    console.log(message); 
 } 
}
