import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../card-service.service';
import { CardData } from '../card.model';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css'],
})
export class CardEditComponent implements OnInit {
  public cardData: CardData = {
    cardnumber: 0,
    name: '',
    month: 0,
    year: 0,
    cvcCode: '',
  };

  public cardFormGroup = this.fromBuilder.nonNullable.group({
    cardnumber: new FormControl(undefined, [
      numberValidator(),
      Validators.required,
    ]),
    name: new FormControl('', [Validators.required]),
    month: new FormControl(undefined),
    year: new FormControl(undefined),
    cvcCode: new FormControl(''),
  });

  constructor(
    private cardService: CardServiceService,
    private fromBuilder: FormBuilder
  ) {}

  public cardData$ = this.cardService.cardData;

  ngOnInit(): void {
    // this.cardFormGroup.get('cardnumber')?.valueChanges.subscribe((value) => {
    //   if (this.cardFormGroup.get('cardnumber')?.invalid) {
    //     alert('Invalid card number');
    //   }
    // });

    this.cardFormGroup.valueChanges.subscribe(() => {
      const cardData: CardData = this.cardFormGroup.getRawValue();
      this.cardService.setCardData(cardData);
    });
  }

  public confirmCardData(): void {
    if (this.cardFormGroup.valid) {
      console.log(this.cardFormGroup.value);
    }
  }
}

export function numberValidator(): ValidatorFn {
  const regex = /[a-zA-Z]/;
  return (control: AbstractControl): ValidationErrors | null => {
    const containsText = regex.test(control.value);
    return containsText ? { textNotAllowed: { value: control.value } } : null;
  };
}
