import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmNewProjectComponent } from './adm-new-project.component';

describe('AdmNewProjectComponent', () => {
  let component: AdmNewProjectComponent;
  let fixture: ComponentFixture<AdmNewProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmNewProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
