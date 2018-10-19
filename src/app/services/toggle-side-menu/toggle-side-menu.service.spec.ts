import { TestBed, inject } from '@angular/core/testing';

import { ToggleSideMenuService } from './toggle-side-menu.service';

describe('ToggleSideMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToggleSideMenuService]
    });
  });

  it('should be created', inject([ToggleSideMenuService], (service: ToggleSideMenuService) => {
    expect(service).toBeTruthy();
  }));
});
