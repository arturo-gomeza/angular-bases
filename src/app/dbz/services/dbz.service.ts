import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Veggeta',
    power: 7500
  }
];

addCharacter( character:Character ):void {
  const newCharacter  = { id: uuid(), ...character };

  this.characters.push(newCharacter);
}

// onDeleteCharacter ( index: number): void {
//   this.characters.splice(index,1);
// }

  deleteCharacterByID (id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
