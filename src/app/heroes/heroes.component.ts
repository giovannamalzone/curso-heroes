import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes.model';
import { HEROES } from '../mock-heroes';

@Component({
  //decorator
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})

//faz parte do ciclo de vida do component
export class HeroesComponent implements OnInit{
  heroes: Hero[] = [];
  selectedHero?: Hero;

constructor(private heroService: HeroService) {}

ngOnInit(): void {
  this.getHeroes();
}

getHeroes(): void{
  this.heroes = this.heroService.getHeroes();
}

  onSelect(hero: Hero): void {
    //this = contexto da classe
    this.selectedHero = hero;
  }
}
