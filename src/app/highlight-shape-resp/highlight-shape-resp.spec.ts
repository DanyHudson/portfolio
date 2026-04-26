import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightShapeResp } from './highlight-shape-resp';

describe('HighlightShapeResp', () => {
  let component: HighlightShapeResp;
  let fixture: ComponentFixture<HighlightShapeResp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightShapeResp]
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightShapeResp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});