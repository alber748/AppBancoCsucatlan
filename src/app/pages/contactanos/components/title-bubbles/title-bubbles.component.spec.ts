import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBubblesComponent } from './title-bubbles.component';

describe('TitleBubblesComponent', () => {
  let component: TitleBubblesComponent;
  let fixture: ComponentFixture<TitleBubblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleBubblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleBubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
