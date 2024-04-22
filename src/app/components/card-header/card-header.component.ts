import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ICardHeader } from '../../models/card-header.interface';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss',
})
export class CardHeaderComponent implements OnInit {
  @Input({ required: true }) header: ICardHeader = {} as ICardHeader;

  @Input({ required: false, alias: 'style' })
  backgroundStyle: 'orange' | 'aqua' | 'blue' | null | undefined | string =
    'orange';

  setHeader: ICardHeader = {
    title: this.header.title,
    description: this.header.description,
    iconSrc: this.header.iconSrc,
  };

  bgColor: 'orange' | 'aqua' | 'blue' | null | undefined | string = 'orange';

  ngOnInit(): void {
    this.bgColor = this.backgroundStyle;
  }
}
