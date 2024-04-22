import { Component, Input, OnInit } from '@angular/core';
import { ICardItem } from '../../models/models';

@Component({
  selector: 'app-card-resume',
  templateUrl: './card-resume.component.html',
  styleUrl: './card-resume.component.scss',
})
export class CardResumeComponent {
  @Input({ required: true }) itens: ICardItem[] = {} as ICardItem[];

  itensLoad: ICardItem[] = {} as ICardItem[];
}
