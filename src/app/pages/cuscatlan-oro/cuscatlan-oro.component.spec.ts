import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuscatlanOroComponent } from './cuscatlan-oro.component';

describe('CuscatlanOroComponent', () => {
  let component: CuscatlanOroComponent;
  let fixture: ComponentFixture<CuscatlanOroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuscatlanOroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuscatlanOroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
