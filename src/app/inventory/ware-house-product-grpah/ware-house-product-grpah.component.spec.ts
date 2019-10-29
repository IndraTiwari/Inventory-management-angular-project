import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WareHouseProductGrpahComponent } from './ware-house-product-grpah.component';

describe('WareHouseProductGrpahComponent', () => {
  let component: WareHouseProductGrpahComponent;
  let fixture: ComponentFixture<WareHouseProductGrpahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WareHouseProductGrpahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WareHouseProductGrpahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
