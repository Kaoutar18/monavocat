import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitDesSocietesComponent } from './droit-des-societes.component';

describe('DroitDesSocietesComponent', () => {
  let component: DroitDesSocietesComponent;
  let fixture: ComponentFixture<DroitDesSocietesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DroitDesSocietesComponent]
    });
    fixture = TestBed.createComponent(DroitDesSocietesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
