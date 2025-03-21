import { effect, Injectable, signal } from '@angular/core';
import { Characters } from '../Interfaces/CharacterInterface';
const loadFromLocalStorage = () => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Characters[]>(loadFromLocalStorage());
  constructor() { }

saveToLocalStorage=effect(()=>{
  localStorage.setItem('characters',JSON.stringify(this.characters()));
});


  addCharacter(newCharacter: Characters) {
    this.characters.update((caractersArray) => [...caractersArray, newCharacter]);
  }
}
