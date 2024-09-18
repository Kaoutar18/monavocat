import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionServiceComponent } from './gestion-service.component';

describe('GestionServiceComponent', () => {
  let component: GestionServiceComponent;
  let fixture: ComponentFixture<GestionServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionServiceComponent]
    });
    fixture = TestBed.createComponent(GestionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
