import { Component, OnInit, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent implements OnInit {
  name=signal("Ironman");
  age =signal(45);
  constructor() { }

  ngOnInit() {
  }
  getHeroDescription(){
    return `${this.name()} is a superhero and he is ${this.age()} years old`;
  }
  changeHero(){
    this.name.set("Spiderman");
    this.age.set(22);
  }
  resetForm(){
    this.name.set("Ironman");
    this.age.set(45);
  }
  changeAge(){
    this.age.set(60);
  }
  changeCapitalizeName(){
    return this.name().toUpperCase();
  }
}
