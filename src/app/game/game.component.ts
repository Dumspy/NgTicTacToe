import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from "../board/board.component";
import { CellValue } from 'src/types/cell-value';
import { animate, style, transition, trigger } from '@angular/animations';
import { gameHistory } from 'src/types/game-history';

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
    selector: 'app-game',
    standalone: true,
    templateUrl: './game.component.html',
    styles: [],
    imports: [CommonModule, BoardComponent]
})
export class GameComponent {
    gameHistory: gameHistory = []
    xIsNext = true
    winner = false

    get player(): CellValue {
        return this.xIsNext ? 'X' : 'O'
    }

    get board(): CellValue[] {
        return [...this.gameHistory[this.gameHistory.length-1].currentGameState]
    }

    get currentMove(): number {
        return this.board.reduce((prev, current) => {
            if (current != null) {
                prev++
            }

            return prev
        }, 0)
    }

    ngOnInit(): void {
        this.newGame()
    }

    newGame() {
        this.gameHistory = []
        this.winner = false
        this.gameHistory.push({
            currentGameState: Array(9).fill(null),
            winner: this.winner
        })
    }

    onClick(index: number) {
        if (this.board[index] || this.winner) return

        const board = this.board
        board[index] = this.player

        this.winner = this.checkForWinner()
        this.gameHistory.push({
            currentPlayer: this.player,
            currentGameState: board,
            winner: this.winner
        })

        if (!this.winner)
            this.xIsNext = !this.xIsNext
    }

    checkForWinner() {
        const currentMove = this.currentMove // TODO After checking for a winner if current move is 9 then run logic for game end on tie
        if (currentMove < 5) { return false }
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
