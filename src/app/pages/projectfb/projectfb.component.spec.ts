import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectfbComponent } from './projectfb.component';

describe('ProjectfbComponent', () => {
  let component: ProjectfbComponent;
  let fixture: ComponentFixture<ProjectfbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectfbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
