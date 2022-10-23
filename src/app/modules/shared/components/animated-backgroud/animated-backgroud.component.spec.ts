import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBackgroudComponent } from './animated-backgroud.component';

describe('AnimatedBackgroudComponent', () => {
  let component: AnimatedBackgroudComponent;
  let fixture: ComponentFixture<AnimatedBackgroudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedBackgroudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedBackgroudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
