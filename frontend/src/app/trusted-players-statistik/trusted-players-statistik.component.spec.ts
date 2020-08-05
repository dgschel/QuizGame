import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedPlayersStatistikComponent } from './trusted-players-statistik.component';

describe('TrustedPlayersStatistikComponent', () => {
  let component: TrustedPlayersStatistikComponent;
  let fixture: ComponentFixture<TrustedPlayersStatistikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustedPlayersStatistikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedPlayersStatistikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
