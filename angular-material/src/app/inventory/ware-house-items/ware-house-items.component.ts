import { Component, OnInit } from '@angular/core';
import { WareHouseItemService } from '../ware-house-item.service';
import { WareHouseItem } from '../ware-house-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ware-house-items',
  templateUrl: './ware-house-items.component.html',
  styleUrls: ['./ware-house-items.component.css']
})
export class WareHouseItemsComponent implements OnInit {

  displayInventoryData: boolean;
  wareHouseItem: WareHouseItem[];
  submittedData: any = [];
  searchProduct: string;
  selectedItem: any;

  constructor( private wareItemService: WareHouseItemService, private router: Router ) {

  }

  ngOnInit() {
    this.getItemList();
    this.displayInventoryData = false;
  }


  getItemList() {
    this.wareItemService.getItemList().subscribe(response => {
      this.submittedData = response;
      console.log('response', this.submittedData);
    });
  }
  addItems() {
    this.displayInventoryData = true;
  }

  backToList(e: string) {
    this.displayInventoryData = false;
    this.getItemList();
  }

  onDelete(product) {
    console.log(product);
    this.wareItemService.deleteItem(product.id).subscribe(response => {
      console.log('delete response', response);
    });
    this.getItemList();
  }

  onEdit(wareItem) {
    console.log('editwareIte,', wareItem);
    this.selectedItem = { wareItem };
    this.displayInventoryData = true;
  }

  seeGraph() {
  this.router.navigate(['/inventory-graph']);
  }
}
