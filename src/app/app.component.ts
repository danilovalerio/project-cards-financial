import { Component } from '@angular/core';
import { ICardItem } from './models/card-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'project-cards-financial';

  itens: ICardItem[] = [
    {
      title: 'Item 1',
      description: 'Desc 1',
    },
    {
      title: 'Item 2',
      description: 'Desc 2',
    },
    {
      title: 'Item 3',
      description: 'Desc 3',
    },
  ];
}
