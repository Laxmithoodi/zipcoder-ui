import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabShowComponent } from './lab-show.component';

describe('LabShowComponent', () => {
  let component: LabShowComponent;
  let fixture: ComponentFixture<LabShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
