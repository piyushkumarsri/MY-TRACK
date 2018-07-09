import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmNewTaskComponent } from './adm-new-task.component';

describe('AdmNewTaskComponent', () => {
  let component: AdmNewTaskComponent;
  let fixture: ComponentFixture<AdmNewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmNewTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
