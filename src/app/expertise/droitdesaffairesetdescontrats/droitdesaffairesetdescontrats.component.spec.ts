import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitdesaffairesetdescontratsComponent } from './droitdesaffairesetdescontrats.component';

describe('DroitdesaffairesetdescontratsComponent', () => {
  let component: DroitdesaffairesetdescontratsComponent;
  let fixture: ComponentFixture<DroitdesaffairesetdescontratsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DroitdesaffairesetdescontratsComponent]
    });
    fixture = TestBed.createComponent(DroitdesaffairesetdescontratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
