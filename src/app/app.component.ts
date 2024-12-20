import { Component } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loading-spinner';
  countries:any=[];
  loading:boolean=true;

  constructor(public cs:CountryService){}
  ngOnInit(){
    this.cs.getCountries().subscribe({
      next:(res)=>{
        this.countries=res;
      },
      complete:()=>{
        this.loading=false
      }
    })
  }



}
