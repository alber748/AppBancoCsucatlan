import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordeonAttentionEfficiencyComponent } from './acordeon-attention-efficiency.component';

describe('AcordeonAttentionEfficiencyComponent', () => {
  let component: AcordeonAttentionEfficiencyComponent;
  let fixture: ComponentFixture<AcordeonAttentionEfficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcordeonAttentionEfficiencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordeonAttentionEfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
