import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }
  getSameValueOf(list:any[], critiria:string, value:any){
    return list.filter(item => item[critiria] === value).length;

  }
}
