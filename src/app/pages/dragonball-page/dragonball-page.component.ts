import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Characters } from '../../Interfaces/CharacterInterface';
import { CharacterListComponent } from "../../components/dragon-ball/character-list/character-list.component";
@Component({
  selector: 'app-dragonball-page',
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent implements OnInit {
characters=signal<Characters[]>([
  {id:1,name:'Goku',power:9001,},
  {id:2,name:'Vegeta',power:9000,},
]);
name=signal('Son Gohanda');
power=signal(0);
  constructor() { }

  ngOnInit() {
  }
  addCharacter(){
  if(!this.name()||!this.power()||this.power()<=0){
      return;
    }
    this.characters.update((caractersArray) => [
      ...caractersArray,
      {
        id: caractersArray.length + 1,
        name: this.name(),
        power: this.power(),
      }
    ]);
    this.name.set('Son Gohanda');
    this.power.set(0);
  }
  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
