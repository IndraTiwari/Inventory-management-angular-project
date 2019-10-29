import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WareHouseItemsComponent } from './ware-house-items.component';

describe('WareHouseItemsComponent', () => {
  let component: WareHouseItemsComponent;
  let fixture: ComponentFixture<WareHouseItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WareHouseItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WareHouseItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
