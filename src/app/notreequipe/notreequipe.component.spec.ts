import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreequipeComponent } from './notreequipe.component';

describe('NotreequipeComponent', () => {
  let component: NotreequipeComponent;
  let fixture: ComponentFixture<NotreequipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotreequipeComponent]
    });
    fixture = TestBed.createComponent(NotreequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
