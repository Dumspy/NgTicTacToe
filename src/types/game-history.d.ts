import { CellValue } from "./cell-value"

export type gameHistory = {
    currentPlayer?: CellValue
    currentGameState: CellValue[]
    winner: boolean
}[]
