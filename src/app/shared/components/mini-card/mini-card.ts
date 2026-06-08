import { Component, input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  imports: [],
  templateUrl: './mini-card.html',
  styleUrl: './mini-card.css',
})
export class MiniCard {
  iconPath = input.required<string>();
  iconColor = input.required<string>();
  hoverColor = input<string>();
  title = input.required<string>();
  description = input.required<string>();
  hovered = false;
}
