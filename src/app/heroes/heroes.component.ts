import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero";
import { HeroService } from "../hero.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  //the parameter simultaneously defines a private heroService property and identifies it as a HeroService
  //injection site

  //When angular creates a HeroesComponent, the dependency injection system sets the heroService parameter 
  //to the singleton instance of HeroService
  constructor(private heroService: HeroService) { }
  
  //ngOnIt is a lifecycle hook.  Angular calls ngOnIt shortly after creating a component
  //it's a good place to put initialization logic
  ngOnInit(): void {
    this.getHeroes();
  }
  
 

  //Observable.subscribe for when making request to remote server
  //waits for observvable to emit the array of heroes - which could happen now
  //or several minutes from now
  //the subscribe() method passes the emitted array to the callback, which sets the component's
  //heroes property
  //asynchronous approach
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)

  }


  //When given name is non-blank the handler creates a hero-like object from the name(it's only missing Id)
  //and passes it into the services addHero() method
  //When addHero() saves successfully, the subscribe() callback receives the new hero and pushes it into 
  //the heroes list for display

  //addHero() differes from update hero in two ways:
  //it calls HttpClient.post() instead of put()
  // it expects the server to generate an id for the new hero, which it returns 
  //in the Observable<Hero> to the caller
  add(name: string): void {
    name= name.trim();
    if(!name) {return; }
    this.heroService.addHero({ name } as Hero )
    .subscribe(hero => {
      this.heroes.push(hero);
    })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h!== hero);
    this.heroService.deleteHero(hero.id).subscribe();

  }
 

}
