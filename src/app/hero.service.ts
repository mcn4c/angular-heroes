import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";


//Injectable marks the class as one that participates in the dependency injection system
//HeroService class is going to provide an injectable service -- and it can also have its own
//injected dependenceies

//must make service available to the dependency injection system by registering a provider
@Injectable({
  providedIn: 'root'
})
export class HeroService {


  //this is typical service-in-service scenario: you inject the MessageService into the HeroService
  //which is injected into the HeroesComponent
  constructor(private messageService: MessageService) { }

  //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  };
  


  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.

    //getHero has an asynchronous signature
    //it returns mock hero as an observable, using the RxJS of() function
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}