import { Component, OnInit } from '@angular/core';
import { WareHouseItemService } from '../ware-house-item.service';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';



@Component({
  selector: 'app-ware-house-product-grpah',
  templateUrl: './ware-house-product-grpah.component.html',
  styleUrls: ['./ware-house-product-grpah.component.css']
})
export class WareHouseProductGrpahComponent implements OnInit {

  unitArray: any = [];
  productnameArray: any = [];
  constructor(private wareItemService: WareHouseItemService, private router: Router) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = this.productnameArray;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: this.unitArray, label: 'Available Units' },
  ];
  ngOnInit() {
    this.getListItem();
  }

  getListItem() {
    this.wareItemService.getItemList().pipe(map(res => {
      console.log(res);
      res.forEach((element) => {
        this.unitArray.push(element.availableUnits);
        this.productnameArray.push(element.productName);
      });
    }))
      .subscribe(() => {
      });
  }

  backToList() {
    this.router.navigate(['/inventory-list']);
  }
}
