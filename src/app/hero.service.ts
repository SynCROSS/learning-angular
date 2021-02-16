import { Injectable } from '@angular/core';
import { Heroes } from './heroes/heroes';
import { Hero } from './heroes/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private MessageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.MessageService.addMessage('Message is sended successfully!');
    return of(Heroes);
  }
  getHeroById(id: number): Observable<Hero> {
    this.MessageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(Heroes[+id - 1]);
  }
}
