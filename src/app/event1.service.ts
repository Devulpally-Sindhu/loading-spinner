import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Event1Service {
  addEvent=new EventEmitter()

  constructor() { }

  firstToSecond(x:any){
    this.addEvent.emit(x)
  }
}
