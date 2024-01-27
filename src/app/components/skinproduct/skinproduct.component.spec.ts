import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinproductComponent } from './skinproduct.component';

describe('SkinproductComponent', () => {
  let component: SkinproductComponent;
  let fixture: ComponentFixture<SkinproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkinproductComponent]
    });
    fixture = TestBed.createComponent(SkinproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
