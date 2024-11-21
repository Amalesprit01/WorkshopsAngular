import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurComponentComponent } from './fournisseur-component.component';

describe('FournisseurComponentComponent', () => {
  let component: FournisseurComponentComponent;
  let fixture: ComponentFixture<FournisseurComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FournisseurComponentComponent]
    });
    fixture = TestBed.createComponent(FournisseurComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
