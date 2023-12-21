import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CardData } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  public cardData: Subject<CardData> = new Subject<CardData>();

  public setCardData(cardData: CardData): void {
    this.cardData.next(cardData);
  }
}
