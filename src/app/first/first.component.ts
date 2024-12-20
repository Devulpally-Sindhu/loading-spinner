import { Component } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  x:any;
  constructor(public es:EventService){}

  callSub(){
    this.es.callEvent.next(this.x)

  }

}
