import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellValue } from 'src/types/cell-value';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cell.component.html',
  styles: [
  ]
})
export class CellComponent {
    @Input() value!: CellValue | null
}
