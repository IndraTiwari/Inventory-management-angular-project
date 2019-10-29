import { Pipe, PipeTransform } from '@angular/core';
import { WareHouseItem } from './ware-house-item';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(productName: WareHouseItem[], searchProduct: string): WareHouseItem[] {
    if (!productName || !searchProduct) {
      return productName;
    }
    return productName.filter(product =>
      product.productName.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1);
  }
}

