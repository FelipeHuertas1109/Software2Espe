import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personaje } from './dragonball.interface';

@Component({
    selector: 'app-dragonball',
    imports: [CommonModule],
    templateUrl: './dragonball.html'
})

export class DragonBallComponent {
    nombre = signal('');
    poder = signal(0);

    agregarPersonaje() {
        if (!this.nombre() || !this.poder() || this.poder() < 0) {
            return;
        }
        const nuevoPersonaje: Personaje = {
            id: this.personajes().length + 1,
            nombre: this.nombre(),
            poder: this.poder()
        };
        this.personajes.set([...this.personajes(), nuevoPersonaje]);

        this.nombre.set('');
        this.poder.set(0);
    }
    personajes: WritableSignal<Personaje[]> = signal<Personaje[]>([
        {id: 1, nombre: 'Goku', poder: 10000},
        {id: 2, nombre: 'Vegeta', poder: 9000},
        {id: 3, nombre: 'Gohan', poder: 8000},
        {id: 4, nombre: 'Piccolo', poder: 7000},
        {id: 5, nombre: 'Bulma', poder: 6000},
        {id: 6, nombre: 'Krillin', poder: 5000},
        {id: 7, nombre: 'Yamcha', poder: 4000}
    ]);
    powerClass: Signal<{[key: string]: boolean}> = computed(() => {
        return {
            'text-danger': true,
        };
    });
}