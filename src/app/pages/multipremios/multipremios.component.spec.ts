import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipremiosComponent } from './multipremios.component';

describe('MultipremiosComponent', () => {
  let component: MultipremiosComponent;
  let fixture: ComponentFixture<MultipremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipremiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
