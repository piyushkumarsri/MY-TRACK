import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmNewErojectComponent } from './adm-new-eroject.component';

describe('AdmNewErojectComponent', () => {
  let component: AdmNewErojectComponent;
  let fixture: ComponentFixture<AdmNewErojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmNewErojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmNewErojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
