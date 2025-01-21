import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  
  log(msg: string): void {
    console.log(`LOG: ${msg}`);
  }

  error(msg: string): void {
    console.error(`ERROR: ${msg}`);
  }

  warn(msg: string): void {
    console.warn(`WARN: ${msg}`);
  }
}

