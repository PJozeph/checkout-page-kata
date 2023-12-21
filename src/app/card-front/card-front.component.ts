import { Component, Input } from '@angular/core';
import { CardData } from '../card.model';

@Component({
  selector: 'app-card-front',
  templateUrl: './card-front.component.html',
  styleUrls: ['./card-front.component.css'],
})
export class CardFrontComponent {
  @Input() cardData!: CardData;
}
