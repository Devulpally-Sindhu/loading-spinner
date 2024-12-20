import { Component } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  firstname:any='';
  constructor(public es:EventService){}
  ngOnInit(){
    this.es.callEvent.subscribe((res)=>{
      this.firstname=res;
    })
  }

}
