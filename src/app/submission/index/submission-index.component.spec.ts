import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionIndexComponent } from './submission-index.component';

describe('SubmissionIndexComponent', () => {
  let component: SubmissionIndexComponent;
  let fixture: ComponentFixture<SubmissionIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
