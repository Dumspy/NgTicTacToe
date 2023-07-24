import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { CellComponent } from '../cell/cell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent, CellComponent],
      imports: [BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('grid should have 9 children', () => {
    const fixture = TestBed.createComponent(BoardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.grid')?.children.length).toBe(9)
  });

  it('winner should not be there',()=>{
    const fixture = TestBed.createComponent(BoardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#winner-text')).toBeNull()
  })


  it('winner should be there',()=>{
    const fixture = TestBed.createComponent(BoardComponent);
    fixture.detectChanges();
    fixture.componentInstance.winner = true
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#winner-text')).toBeTruthy()
  })
});
