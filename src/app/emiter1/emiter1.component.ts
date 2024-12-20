import { Component } from '@angular/core';
import { Event1Service } from '../event1.service';

@Component({
  selector: 'app-emiter1',
  templateUrl: './emiter1.component.html',
  styleUrl: './emiter1.component.css'
})
export class Emiter1Component {
  x1:number=0;
  x2:number=0;
  addition:number=0;

  constructor(public ee:Event1Service){}

  add(){
    this.ee.firstToSecond(this.addition=Number(this.x1)+Number(this.x2))
  }
}
