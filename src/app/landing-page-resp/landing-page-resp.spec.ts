import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageResp } from './landing-page-resp';

describe('LandingPageResp', () => {
  let component: LandingPageResp;
  let fixture: ComponentFixture<LandingPageResp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageResp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageResp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
