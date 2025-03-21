import { Component, inject, OnInit, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragon-ball/character-list/character-list.component";
import { AddCharacterComponent } from "../../components/dragon-ball/add-character/add-character.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, AddCharacterComponent],
})
export class DragonballSuperPageComponent implements OnInit {
  public dragonservice=inject(DragonballService);
  ngOnInit() {
  }
}
