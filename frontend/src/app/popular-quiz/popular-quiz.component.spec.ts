import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularQuizComponent } from './popular-quiz.component';

describe('PopularQuizComponent', () => {
  let component: PopularQuizComponent;
  let fixture: ComponentFixture<PopularQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
