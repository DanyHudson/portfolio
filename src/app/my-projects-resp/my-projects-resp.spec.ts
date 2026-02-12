import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsResp } from './my-projects-resp';

describe('MyProjectsResp', () => {
  let component: MyProjectsResp;
  let fixture: ComponentFixture<MyProjectsResp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProjectsResp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProjectsResp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
