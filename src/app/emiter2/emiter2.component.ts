import { Component } from '@angular/core';
import { Event1Service } from '../event1.service';

@Component({
  selector: 'app-emiter2',
  templateUrl: './emiter2.component.html',
  styleUrl: './emiter2.component.css'
})
export class Emiter2Component {
  result:any;
  constructor(public es:Event1Service){}
  ngOnInit(){
    this.es.addEvent.subscribe((res)=>{
      this.result=res;
    })
  }

}
