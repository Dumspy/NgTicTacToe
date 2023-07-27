import type { cellValue } from "./cell-value"

export type gameHistory = {
    currentPlayer?: cellValue
    currentGameState: cellValue[]
    winner: boolean
}[]
