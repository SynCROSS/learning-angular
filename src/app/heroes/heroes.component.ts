import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [
    {
      id: 1,
      name: 'Ｅ・ＨＥＲＯ フェザーマン', // * Avian
      element_type: 'WIND',
      level: 3,
      type: ['Warrior'],
      text:
        'A winged Elemental HERO who wheels through the sky and manipulates the wind.' +
        ' ' +
        'His signature move, Featherbreak, gives villainy a blow from sky-high.',
      atk: 1000,
      def: 1000,
    },
    {
      id: 2,
      name: 'Ｅ・ＨＥＲＯ バーストレディ', // * Burstinatrix
      element_type: 'FIRE',
      level: 3,
      type: ['Warrior'],
      text:
        'A flame manipulator who was the first Elemental HERO woman.' +
        ' ' +
        'Her Burstfire burns away villainy.',
      atk: 1200,
      def: 800,
    },
    {
      id: 3,
      name: 'Ｅ・ＨＥＲＯ スパークマン', // * Sparkman
      element_type: 'LIGHT',
      level: 4,
      type: ['Warrior'],
      text:
        'An Elemental HERO and a warrior of light who proficiently wields many kinds of armaments.' +
        ' ' +
        'His Static Shockwave cuts off the path of villainy.',
      atk: 1600,
      def: 1400,
    },
    {
      id: 4,
      name: 'Ｅ・ＨＥＲＯ クレイマン', // * Clayman
      element_type: 'EARTH',
      level: 4,
      type: ['Warrior'],
      text:
        `An Elemental HERO with a clay body built-to-last.` +
        ' ' +
        `He'll preserve his Elemental HERO colleagues at any cost.`,
      atk: 800,
      def: 2000,
    },
    {
      id: 5,
      name: 'Ｅ・ＨＥＲＯ バブルマン', // * Bubbleman
      element_type: 'WATER',
      level: 4,
      type: ['Warrior', 'Effect'],
      effect:
        'If this is the only card in your hand, you can Special Summon it (from your hand).' +
        ' ' +
        'When this card is Summoned: You can draw 2 cards.' +
        ' ' +
        'You must control no other cards and have no cards in your hand to activate and to resolve this effect.',
      atk: 800,
      def: 1200,
    },
  ];

  selectedHero: Hero | undefined;

  onSelect = (hero: Hero): void => {
    this.selectedHero = hero;
  };

  constructor() {}

  ngOnInit(): void {}
}
