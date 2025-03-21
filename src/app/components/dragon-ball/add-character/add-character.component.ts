import { Component, OnInit, output, signal } from '@angular/core';
import { Characters as Character } from '../../../Interfaces/CharacterInterface';

@Component({
  selector: 'add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent implements OnInit {

  name = signal('Son Gohanda');
  power = signal(0);
  newCharacter=output<Character>();
  constructor() { }

  ngOnInit() {
  }

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    let character:Character = {
      id:Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    }
    this.newCharacter.emit(character);
    this.resetFields();
  }
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
