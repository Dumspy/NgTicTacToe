import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CellValue } from '../cell-value';

@Component({
    selector: 'app-cell',
    templateUrl: './cell.component.html',
    styleUrls: ['./cell.component.css']
})
export class CellComponent {
    @Input() value?: CellValue
}
