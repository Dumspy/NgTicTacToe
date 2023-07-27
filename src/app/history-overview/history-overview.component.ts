import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameHistoryService } from '../game-history.service';
import type { gameHistory } from 'src/types/game-history';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-history-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './history-overview.component.html',
  styles: [
  ]
})
export class HistoryOverviewComponent {
    gameHistory: gameHistory[] = []
    gameHistoryService: GameHistoryService = inject(GameHistoryService)

    constructor(){
        this.gameHistory = this.gameHistoryService.getAllPreviousGames()
    }

    consoleClick(string:  any){
        console.log(string)
    }
}
