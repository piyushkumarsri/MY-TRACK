import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmNewClientComponent } from './adm-new-client.component';

describe('AdmNewClientComponent', () => {
  let component: AdmNewClientComponent;
  let fixture: ComponentFixture<AdmNewClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmNewClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmNewClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
