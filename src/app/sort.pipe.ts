import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var temp=[...value];
    if(args[0]==='a'){
      return temp.sort()
    }
    if(args[0]==='d'){
      return temp.sort().reverse()
    }
  }

}
