import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Typewriter02 } from './typewriter-02';

describe('Typewriter02', () => {
  let component: Typewriter02;
  let fixture: ComponentFixture<Typewriter02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Typewriter02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Typewriter02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
