import { Component, input, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Character } from '../interfaces/Character';

@Component({
  selector: 'app-character-list',
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styles: ``
})
export class CharacterList {
  characters:InputSignal<Character[]> = input.required<Character[]>();
}
