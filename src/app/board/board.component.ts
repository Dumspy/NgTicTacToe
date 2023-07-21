import { Component, OnInit } from '@angular/core';
import { CellValue } from '../cell-value';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    animations: [
        trigger(
            'inOutAnimation',
            [
              transition(
                ':enter',
                [
                  style({ opacity: 0 }),
                  animate('2s ease-out',
                          style({ opacity: 1 }))
                ]
              ),
              transition(
                ':leave',
                [
                  style({ opacity: 1 }),
                  animate('1s ease-in',
                          style({ opacity: 0 }))
                ]
              )
            ]
          )
    ],
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
    board: CellValue[] = []
    xIsNext = true
    winner = false

    get player(): CellValue {
        return this.xIsNext ? 'X' : 'O'
    }

    ngOnInit(): void {
        this.newGame()
    }

    newGame() {
        this.board = Array(9).fill(null)
        this.winner= false
    }

    onClick(index: number) {
        if (this.board[index] || this.winner) return
        this.board[index] = this.player
        this.winner = this.checkForWinner()
        if (this.winner) return
        this.xIsNext = !this.xIsNext
    }

    checkForWinner() {
        if (this.board.reduce((prev, current) => { if (current != null) { prev++ } return prev }, 0) < 5) { return false }
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Collums
            [0, 4, 8], [2, 4, 6] // Cross
        ]
        for (const winningCombination of winningCombinations) {
            const [a, b, c] = winningCombination
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return true
            }
        }
        return false
    }
}
