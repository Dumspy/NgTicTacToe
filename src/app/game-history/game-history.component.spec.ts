import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHistoryComponent } from './game-history.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameHistoryComponent', () => {
  let component: GameHistoryComponent;
  let fixture: ComponentFixture<GameHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GameHistoryComponent,RouterTestingModule]
    });
    fixture = TestBed.createComponent(GameHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
