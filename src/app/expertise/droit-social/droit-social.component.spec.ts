import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitSocialComponent } from './droit-social.component';

describe('DroitSocialComponent', () => {
  let component: DroitSocialComponent;
  let fixture: ComponentFixture<DroitSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DroitSocialComponent]
    });
    fixture = TestBed.createComponent(DroitSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
