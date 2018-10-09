import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmNewTaskssComponent } from './adm-new-taskss.component';

describe('AdmNewTaskssComponent', () => {
  let component: AdmNewTaskssComponent;
  let fixture: ComponentFixture<AdmNewTaskssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmNewTaskssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmNewTaskssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
