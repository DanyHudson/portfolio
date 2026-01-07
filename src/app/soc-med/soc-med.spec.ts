import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocMed } from './soc-med';

describe('SocMed', () => {
  let component: SocMed;
  let fixture: ComponentFixture<SocMed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocMed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocMed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
