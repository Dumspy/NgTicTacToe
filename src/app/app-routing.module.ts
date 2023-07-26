import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GameHistoryComponent } from './game-history/game-history.component';
import { HistoryOverviewComponent } from './history-overview/history-overview.component';

const routes: Routes = [
    {
        path: '',
        component: GameComponent,
        title: 'TicTacToe'
    },
    {
        path:'history',
        component: HistoryOverviewComponent,
        title: 'Game History Overview'
    },
    {
        path: 'history/game/:id',
        component: GameHistoryComponent,
        title: 'Game History'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
