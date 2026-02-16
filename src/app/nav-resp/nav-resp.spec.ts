import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavResp } from './nav-resp';

describe('NavResp', () => {
  let component: NavResp;
  let fixture: ComponentFixture<NavResp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavResp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavResp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
