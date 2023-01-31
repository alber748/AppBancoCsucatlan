import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeCreditoComponent } from './de-credito.component';

describe('DeCreditoComponent', () => {
  let component: DeCreditoComponent;
  let fixture: ComponentFixture<DeCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeCreditoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
