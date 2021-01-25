import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtername'
})
export class FilternamePipe implements PipeTransform {

  transform(products: {name: string, status: boolean}[]): any[] {
    let product = products;
    product.sort((a: any, b: any) => {
      if (a.name < b.name && !(a.status)) {
        return 1;
      } else if (a.name > b.name && (a.status)) {
        return -1;
      } else {
        return 0;
      } 
    })
    return product;
  }

}
