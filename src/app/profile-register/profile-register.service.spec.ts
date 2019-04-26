import { TestBed } from '@angular/core/testing';

import { ProfileRegisterService } from './profile-register.service';

describe('ProfileRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileRegisterService = TestBed.get(ProfileRegisterService);
    expect(service).toBeTruthy();
  });
});
