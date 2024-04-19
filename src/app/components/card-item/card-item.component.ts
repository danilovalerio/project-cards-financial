import { Component, Input } from '@angular/core';
import { ICardItem } from '../../models/models';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent {
  @Input({ required: true }) item: ICardItem = {} as ICardItem;

  setItem: ICardItem = {
    title: this.item.title,
    description: this.item.description,
  };
}
