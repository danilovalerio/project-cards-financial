import { Component, Input } from '@angular/core';
import { ICardHeader } from '../../models/card-header.interface';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss',
})
export class CardHeaderComponent {
  @Input({ required: true }) header: ICardHeader = {} as ICardHeader;

  setHeader: ICardHeader = {
    title: this.header.title,
    description: this.header.description,
    iconSrc: this.header.iconSrc,
  };
}
