import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WareHouseItemService } from '../ware-house-item.service';

@Component({
  selector: 'app-ware-house-details',
  templateUrl: './ware-house-details.component.html',
  styleUrls: ['./ware-house-details.component.css']
})
export class WareHouseDetailsComponent implements OnInit {

  @Input() inventoryItemDetails: any;
  @Output() itemsList: EventEmitter<string> = new EventEmitter<string>();

  productForm: FormGroup;
  submittedData: any = [];

  constructor(private formBuilder: FormBuilder, private wareItemService: WareHouseItemService) {
   }

  ngOnInit() {
    this.productFormData();
  }

  productFormData() {
    // add
    if (!this.inventoryItemDetails) {
      this.productForm = this.formBuilder.group({
        productName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
        category: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
        availableUnits: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
        unitPrice: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
        location: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
        date: ['', Validators.required],
        description: ['']
      });
    } else {
      // edit
      this.productForm = this.formBuilder.group({
        id: [this.inventoryItemDetails.wareItem.id],
        productName: [this.inventoryItemDetails.wareItem.productName, [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
        category: [this.inventoryItemDetails.wareItem.category, [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
        availableUnits: [this.inventoryItemDetails.wareItem.availableUnits, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
        unitPrice: [this.inventoryItemDetails.wareItem.unitPrice, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
        location: [this.inventoryItemDetails.wareItem.location, [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
        date: [this.inventoryItemDetails.wareItem.date, [Validators.required]],
        description: [this.inventoryItemDetails.wareItem.description]
      });
    }
  }

  onSubmit() {
    console.log('form data', this.productForm.value);
    this.submittedData.push(this.productForm.value);
    console.log('submitted data', this.submittedData);

    this.wareItemService.postItems(this.productForm.value).subscribe(respose => {
      console.log('post response', respose);
    });
    this.backToList();
    this.productForm.reset();
  }

  updateItems() {
    this.wareItemService.UpdateItem(this.productForm.value).subscribe(response => {
      console.log('update response', response);
    });
  }



  backToList() {
    this.itemsList.emit();
  }

}
