import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GameHistoryService } from '../game-history.service';
import { BoardComponent } from "../board/board.component";
import { gameHistory } from 'src/types/game-history';

@Component({
    selector: 'app-game-history',
    standalone: true,
    templateUrl: './game-history.component.html',
    styles: [],
    imports: [CommonModule, RouterModule, BoardComponent]
})
export class GameHistoryComponent {
    currentMove = 0

    gameHistory: gameHistory = []
    route: ActivatedRoute = inject(ActivatedRoute)
    gameHistoryService: GameHistoryService = inject(GameHistoryService)

    @Input()
    set id(id: number){
        this.gameHistory = this.gameHistoryService.getGameByIndex(0)
    }

    NextMove(){
        if(this.currentMove+1>this.gameHistory.length-1){
            return
        }

        this.currentMove++
    }

    PreviousMove(){
        if(this.currentMove-1<0){
            return
        }

        this.currentMove--
    }
}
