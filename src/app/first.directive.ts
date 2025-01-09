import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  constructor(public el:ElementRef) { 
    // setTimeout(()=>{
    //   this.el.nativeElement.style.backgroundColor="red";
    // },4000)
    
    // setInterval(()=>{
    //   if(this.el.nativeElement.style.color==="red"){
    //     this.el.nativeElement.style.color="blue"
    //   }
    //   else{
    //     this.el.nativeElement.style.color="red"
    //   }
    // },1000)
  }

  @HostListener('keyup') onKeyup(){
    var x=this.el.nativeElement.value;
    var p=/[a-z]/.test(x[x.length-1])
    if(p){
      this.el.nativeElement.value=x.slice(0,x.length-1)
    }

  }


}
