import { Component } from '@angular/core';
import { Hero } from '../heroes.model';
import { HEROES } from '../mock-heroes';

@Component({ //decorator
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

//faz parte do ciclo de vida do component
export class HeroesComponent{
  hero: Hero = {
    id: 1,
    name: 'Wolverine'
  };

//pode ser usado para injeção de dependencias

heroes = HEROES;
selectedHero?: Hero;

onSelect(hero: Hero): void{
  //this = contexto da classe
  this.selectedHero = hero;
  }
}
