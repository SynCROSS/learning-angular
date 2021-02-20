import { Injectable } from '@angular/core';
import { Heroes } from './heroes/heroes';
import { Hero } from './heroes/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private MessageService: MessageService,
    private HttpClient: HttpClient
  ) {}

  private heroesUrl = 'api/heroes';

  sendLog(message: string): void {
    this.MessageService.addMessage(`HeroService: ${message}`);
  }

  private handleError<T>(
    operation = 'operation',
    result?: T
  ): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      this.sendLog(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
    this.MessageService.addMessage('Message is sended successfully!');
    return this.HttpClient.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.sendLog('Fetched Heroes')),
      catchError(this.handleError<Hero[]>('getHeroes()', []))
    );
  }
  getHeroById(id: number): Observable<Hero> {
    this.MessageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(Heroes[+id - 1]);
  }
}
