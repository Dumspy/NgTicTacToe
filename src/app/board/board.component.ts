import { Component, Input, Output, EventEmitter} from '@angular/core';
import type { cellValue } from 'src/types/cell-value';
import { animate, style, transition, trigger } from '@angular/animations';
import { CellComponent } from "../cell/cell.component";
import { NgForOf, NgIf } from '@angular/common';

@Component({
    animations: [
        trigger('inOutAnimation', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('2s ease-out', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate('1s ease-in', style({ opacity: 0 }))
            ])
        ])
    ],
    standalone: true,
    selector: 'app-board',
    templateUrl: './board.component.html',
    styles: [],
    imports: [CellComponent, NgIf, NgForOf]
})

export class BoardComponent {
    @Input() gameState!: cellValue[]
    @Output() onClick = new EventEmitter<number>()

    constructor(){
    }
}
