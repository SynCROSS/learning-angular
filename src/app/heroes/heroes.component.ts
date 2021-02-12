import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  selectedHero: Hero | undefined;

  constructor(private HeroService: HeroService) {}

  onSelect = (hero: Hero): void => {
    this.selectedHero = hero;
  };

  getHeroes = (): void => {
    // * Assigning a value to a variable is worked synchronously. But 'Observable' is NOT.
    this.HeroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  };

  ngOnInit(): void {
    this.getHeroes();
  }
}
