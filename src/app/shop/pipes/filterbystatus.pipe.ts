import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbystatus'
})
export class FilterbystatusPipe implements PipeTransform {

  transform(products: {status: boolean}[], name: string,): any[] {
    let product = products;
    if (product) {
      product = product.sort((a) => (a.status ? 1 : -1))
    }
    return product;
  }

}
