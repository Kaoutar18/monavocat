import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRendezvousComponent } from './new-rendezvous.component';

describe('NewRendezvousComponent', () => {
  let component: NewRendezvousComponent;
  let fixture: ComponentFixture<NewRendezvousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRendezvousComponent]
    });
    fixture = TestBed.createComponent(NewRendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
