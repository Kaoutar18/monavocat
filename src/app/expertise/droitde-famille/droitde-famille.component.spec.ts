import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitdeFamilleComponent } from './droitde-famille.component';

describe('DroitdeFamilleComponent', () => {
  let component: DroitdeFamilleComponent;
  let fixture: ComponentFixture<DroitdeFamilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DroitdeFamilleComponent]
    });
    fixture = TestBed.createComponent(DroitdeFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
