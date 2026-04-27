import { ComponentFixture, TestBed } from '@angular/core/testing';
import { myProjectTabs } from '../../models/page-data';

import { ProjectResp } from './project-resp';

describe('ProjectResp', () => {
  let component: ProjectResp;
  let fixture: ComponentFixture<ProjectResp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectResp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectResp);
    fixture.componentRef.setInput('projectData', myProjectTabs[0]);
    fixture.detectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
