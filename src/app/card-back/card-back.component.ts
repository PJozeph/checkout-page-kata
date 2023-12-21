import { Component, Input, OnInit } from '@angular/core';
import { CardServiceService } from '../card-service.service';
import { CardData } from '../card.model';

@Component({
  selector: 'app-card-back',
  templateUrl: './card-back.component.html',
  styleUrls: ['./card-back.component.css'],
})
export class CardBackComponent {
  @Input() cardData!: CardData;
}
