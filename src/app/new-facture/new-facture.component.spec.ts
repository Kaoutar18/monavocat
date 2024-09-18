import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFactureComponent } from './new-facture.component';

describe('NewFactureComponent', () => {
  let component: NewFactureComponent;
  let fixture: ComponentFixture<NewFactureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFactureComponent]
    });
    fixture = TestBed.createComponent(NewFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
