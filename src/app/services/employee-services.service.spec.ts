import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee-services.service';

describe('EmployeeServicesService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
