import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styles: [
  ]
})

export class HistoryComponent {
    route: ActivatedRoute = inject(ActivatedRoute)
    historyId = 0

    constructor(){
        this.historyId = Number(this.route.snapshot.params['id'])
    }
}
