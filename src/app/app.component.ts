import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loading-spinner';
  num:any='';
  ar=["sindhu","vignesh","amma","dady"]

  add(){
    this.ar.push(this.num)
  }

  abc(ind:number,vib:number){
    return vib

  }
 
 



}
