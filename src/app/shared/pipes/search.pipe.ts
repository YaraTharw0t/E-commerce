import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product:Products[], term:string): Products[] {
    return  product.filter(
      (product) =>
        product.title.toLowerCase().includes((term.toLowerCase()))
      
      

      );
  }

}
