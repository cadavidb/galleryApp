import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartsFloatingComponent } from './hearts-floating.component';

describe('HeartsFloatingComponent', () => {
  let component: HeartsFloatingComponent;
  let fixture: ComponentFixture<HeartsFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartsFloatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeartsFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
