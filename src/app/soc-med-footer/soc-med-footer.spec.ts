import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocMedFooter } from './soc-med-footer';

describe('SocMedFooter', () => {
  let component: SocMedFooter;
  let fixture: ComponentFixture<SocMedFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocMedFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocMedFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
