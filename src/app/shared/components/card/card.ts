import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  image = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
