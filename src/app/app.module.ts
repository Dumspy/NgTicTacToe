import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from "./cell/cell.component";

@NgModule({
    declarations: [
        AppComponent,
        BoardComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CellComponent
    ]
})
export class AppModule { }
