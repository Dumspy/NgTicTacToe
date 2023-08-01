import { Injectable } from '@angular/core';
import type { gameHistory } from 'src/types/game-history';

@Injectable({
    providedIn: 'root'
})

export class GameHistoryService {
    protected previousGames: gameHistory[]  = []
    constructor() { }

    getGameByIndex(id: number): gameHistory | undefined{
        return this.previousGames[id] ?? undefined
    }

    getAllPreviousGames(){
        return this.previousGames
    }

    addGame(game: gameHistory, reason: string){
        this.previousGames.push(game)
    }
}
