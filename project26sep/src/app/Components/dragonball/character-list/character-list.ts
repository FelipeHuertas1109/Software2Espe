import { Component, input, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Personaje } from '../../../pages/dragonball/dragonball.interface';

@Component({
  selector: 'app-character-list',
  imports: [CommonModule],
  templateUrl: './character-list.html',
  styles: ``
})
export class CharacterList {
  personajes:InputSignal<Personaje[]> = input.required<Personaje[]>();
}
