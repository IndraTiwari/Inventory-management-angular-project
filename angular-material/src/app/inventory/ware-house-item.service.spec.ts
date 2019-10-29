import { TestBed } from '@angular/core/testing';

import { WareHouseItemService } from './ware-house-item.service';

describe('WareHouseItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WareHouseItemService = TestBed.get(WareHouseItemService);
    expect(service).toBeTruthy();
  });
});
