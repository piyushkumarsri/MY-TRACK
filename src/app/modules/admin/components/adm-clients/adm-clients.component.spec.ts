import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmClientsComponent } from './adm-clients.component';

describe('AdmClientsComponent', () => {
  let component: AdmClientsComponent;
  let fixture: ComponentFixture<AdmClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
