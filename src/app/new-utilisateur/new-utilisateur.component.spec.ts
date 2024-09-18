import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUtilisateurComponent } from './new-utilisateur.component';

describe('NewUtilisateurComponent', () => {
  let component: NewUtilisateurComponent;
  let fixture: ComponentFixture<NewUtilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUtilisateurComponent]
    });
    fixture = TestBed.createComponent(NewUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
