import { Injectable, signal, WritableSignal, computed, Signal, effect } from '@angular/core';
import { Character } from '../Components/dragonball/interfaces/Character';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  // characters = signal<Character[]>(loadFromLocalStorage());

  characters: WritableSignal<Character[]> = signal<Character[]>([
    {id: 1, name: 'Goku', power: 10000},
    {id: 2, name: 'Vegeta', power: 9000},
    {id: 3, name: 'Gohan', power: 8000},
    {id: 4, name: 'Piccolo', power: 7000},
    {id: 5, name: 'Bulma', power: 6000},
    {id: 6, name: 'Krillin', power: 5000},
    {id: 7, name: 'Yamcha', power: 4000}
  ]);

  count = signal(0)

  SaveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters))
  });

  addCharacter(character: Character){
    this.characters.update(list => [...list, character])
    console.log(character)
  }

  powerClass: Signal<{[key: string]: boolean}> = computed(() => {
    return {
        'text-danger': true,
    };
  });
}
