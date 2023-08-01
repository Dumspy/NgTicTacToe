import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOverviewComponent } from './history-overview.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HistoryOverviewComponent', () => {
  let component: HistoryOverviewComponent;
  let fixture: ComponentFixture<HistoryOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HistoryOverviewComponent,RouterTestingModule]
    });
    fixture = TestBed.createComponent(HistoryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
