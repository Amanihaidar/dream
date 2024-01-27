import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumeComponent } from './perfume.component';

describe('PerfumeComponent', () => {
  let component: PerfumeComponent;
  let fixture: ComponentFixture<PerfumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfumeComponent]
    });
    fixture = TestBed.createComponent(PerfumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
