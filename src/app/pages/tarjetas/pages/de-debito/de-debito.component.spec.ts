import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeDebitoComponent } from './de-debito.component';

describe('DeDebitoComponent', () => {
  let component: DeDebitoComponent;
  let fixture: ComponentFixture<DeDebitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeDebitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
