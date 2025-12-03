import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightShape } from './highlight-shape';

describe('HighlightShape', () => {
  let component: HighlightShape;
  let fixture: ComponentFixture<HighlightShape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightShape]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightShape);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
