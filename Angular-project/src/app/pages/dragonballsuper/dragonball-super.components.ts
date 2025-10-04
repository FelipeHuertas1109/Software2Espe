import { Component, inject, effect, signal } from '@angular/core';
import { CharacterAdd } from '../../Components/dragonball/character-add/character-add.component';
import { CharacterList } from '../../Components/dragonball/character-list/character-list.component';
import { CommonModule } from '@angular/common';
import { DragonballService } from '../../services/dragonball';


@Component({
    selector: 'app-dragonballsuper',
    imports: [CommonModule, CharacterAdd, CharacterList],
    templateUrl: './dragonball-super.component.html'
})

export class DragonBallSuperComponent {

    public drabonballService = inject(DragonballService)

    
    
}