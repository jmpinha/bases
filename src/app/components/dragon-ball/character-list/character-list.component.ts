import { Component, input, OnInit } from '@angular/core';
import { Characters } from '../../../Interfaces/CharacterInterface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  imports: [NgClass],
})
export class CharacterListComponent implements OnInit {

  characters=input.required<Characters[]>();
  listName=input.required<string>();
  constructor() { }

  ngOnInit() {
  }

}
