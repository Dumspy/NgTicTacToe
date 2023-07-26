import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
    {
        path: '',
        component: GameComponent,
        title: 'TicTacToe'
    },
    {
        path: 'game/:id',
        component: HistoryComponent,
        title: 'Game History'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
