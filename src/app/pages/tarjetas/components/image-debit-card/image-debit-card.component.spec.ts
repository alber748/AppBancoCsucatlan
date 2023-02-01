import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDebitCardComponent } from './image-debit-card.component';

describe('ImageDebitCardComponent', () => {
  let component: ImageDebitCardComponent;
  let fixture: ComponentFixture<ImageDebitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageDebitCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageDebitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
