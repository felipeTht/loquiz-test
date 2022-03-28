import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultGameComponent } from './result-game.component';

describe('ResultGameComponent', () => {
  let component: ResultGameComponent;
  let fixture: ComponentFixture<ResultGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
