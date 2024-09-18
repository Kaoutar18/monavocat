import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitImmobilierComponent } from './droit-immobilier.component';

describe('DroitImmobilierComponent', () => {
  let component: DroitImmobilierComponent;
  let fixture: ComponentFixture<DroitImmobilierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DroitImmobilierComponent]
    });
    fixture = TestBed.createComponent(DroitImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
