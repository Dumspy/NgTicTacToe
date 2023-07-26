import { Injectable } from '@angular/core';
import { gameHistory } from 'src/types/game-history';

@Injectable({
    providedIn: 'root'
})

export class GameHistoryService {
    protected previousGames: gameHistory[]  = []
    constructor() { }

    getGameByIndex(id: number) { }

    getAllPreviousGames(){
        return this.previousGames
    }

    addGame(game: gameHistory){
        this.previousGames.push(game)
    }
}
