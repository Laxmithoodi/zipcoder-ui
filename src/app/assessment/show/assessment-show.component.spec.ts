import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentShowComponent } from './assessment-show.component';

describe('AssessmentShowComponent', () => {
  let component: AssessmentShowComponent;
  let fixture: ComponentFixture<AssessmentShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
